import { spawn } from 'node:child_process'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join, resolve } from 'node:path'

const baseUrl = process.env.MOKE_CAPTURE_URL || 'http://127.0.0.1:4175'
const outputDir = resolve('site/docs/public/screenshots')
const profileDir = mkdtempSync(join(tmpdir(), 'moke-docs-capture-'))
const debuggingPort = 9333

mkdirSync(outputDir, { recursive: true })

const browser = spawn('chromium', [
  '--headless',
  '--disable-gpu',
  '--no-sandbox',
  '--hide-scrollbars',
  `--remote-debugging-port=${debuggingPort}`,
  `--user-data-dir=${profileDir}`,
  '--window-size=1100,696',
  `${baseUrl}/`,
], { stdio: ['ignore', 'ignore', 'pipe'] })

let browserErrors = ''
browser.stderr.on('data', (chunk) => { browserErrors += chunk })

const delay = (milliseconds) => new Promise((resolveDelay) => setTimeout(resolveDelay, milliseconds))

async function waitForDebugger() {
  for (let attempt = 0; attempt < 80; attempt += 1) {
    try {
      const response = await fetch(`http://127.0.0.1:${debuggingPort}/json/list`)
      const targets = await response.json()
      const page = targets.find((target) => target.type === 'page')
      if (page) return page.webSocketDebuggerUrl
    } catch {
      // Chromium may still be starting.
    }
    await delay(100)
  }
  throw new Error(`Chromium debugger did not start.\n${browserErrors}`)
}

const socketUrl = await waitForDebugger()
const socket = new WebSocket(socketUrl)
await new Promise((resolveOpen, rejectOpen) => {
  socket.addEventListener('open', resolveOpen, { once: true })
  socket.addEventListener('error', rejectOpen, { once: true })
})

let commandId = 0
const pendingCommands = new Map()
socket.addEventListener('message', (event) => {
  const message = JSON.parse(event.data)
  if (!message.id) return
  const pending = pendingCommands.get(message.id)
  if (!pending) return
  pendingCommands.delete(message.id)
  if (message.error) pending.reject(new Error(message.error.message))
  else pending.resolve(message.result)
})

function send(method, params = {}) {
  commandId += 1
  return new Promise((resolveCommand, rejectCommand) => {
    pendingCommands.set(commandId, { resolve: resolveCommand, reject: rejectCommand })
    socket.send(JSON.stringify({ id: commandId, method, params }))
  })
}

async function evaluate(expression) {
  const result = await send('Runtime.evaluate', {
    expression,
    awaitPromise: true,
    returnByValue: true,
  })
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text)
  return result.result.value
}

async function navigate(pathname, width = 1024, height = 648) {
  await send('Emulation.setDeviceMetricsOverride', {
    width,
    height,
    deviceScaleFactor: 1,
    mobile: width < 600,
  })
  await send('Page.navigate', { url: `${baseUrl}${pathname}` })
  for (let attempt = 0; attempt < 100; attempt += 1) {
    const ready = await evaluate(`document.readyState === 'complete' && !document.body.innerText.includes('正在加载隐私设置')`)
    if (ready) break
    await delay(100)
  }
  await delay(1200)
}

async function capture(name) {
  const screenshot = await send('Page.captureScreenshot', {
    format: 'png',
    fromSurface: true,
    captureBeyondViewport: false,
  })
  writeFileSync(join(outputDir, name), Buffer.from(screenshot.data, 'base64'))
}

try {
  await send('Page.enable')
  await send('Runtime.enable')

  // The homepage seeds the same offline-mode data used by its interactive preview.
  for (let attempt = 0; attempt < 100; attempt += 1) {
    const count = await evaluate(`new Promise((resolveCount) => {
      const request = indexedDB.open('moke-offline-books')
      request.onerror = () => resolveCount(0)
      request.onsuccess = () => {
        const database = request.result
        if (!database.objectStoreNames.contains('books')) {
          database.close()
          resolveCount(0)
          return
        }
        const countRequest = database.transaction('books', 'readonly').objectStore('books').count()
        countRequest.onerror = () => resolveCount(0)
        countRequest.onsuccess = () => {
          database.close()
          resolveCount(countRequest.result)
        }
      }
    })`)
    if (count >= 10) break
    await delay(100)
  }

  const captures = [
    ['moke-welcome.png', '/moke-app/welcome/', 1024, 648],
    ['moke-shelf-desktop.png', '/moke-app/shelf/', 1024, 648],
    ['moke-library.png', '/moke-app/library/', 1024, 648],
    ['moke-downloads.png', '/moke-app/downloads/', 1024, 648],
    ['moke-settings.png', '/moke-app/settings/', 1024, 648],
    ['moke-appearance.png', '/moke-app/settings/appearance/', 1024, 648],
    ['moke-about.png', '/moke-app/about/', 1024, 648],
    ['moke-access-code.png', '/moke-app/access/', 1024, 648],
    ['moke-shelf-mobile.png', '/moke-app/shelf/', 390, 844],
  ]

  for (const [name, pathname, width, height] of captures) {
    await navigate(pathname, width, height)
    await capture(name)
    if (name === 'moke-library.png') {
      const opened = await evaluate(`(() => {
        const target = document.elementFromPoint(330, 360)
        const detailLink = target?.closest('a') || target?.querySelector('a')
        if (!detailLink) return false
        detailLink.click()
        return true
      })()`)
      if (!opened) throw new Error('Could not find a book detail link in the offline library.')
      for (let attempt = 0; attempt < 100; attempt += 1) {
        const ready = await evaluate(`location.pathname.endsWith('/detail') && !document.body.innerText.includes('正在加载')`)
        if (ready) break
        await delay(100)
      }
      await delay(800)
      const expanded = await evaluate(`(() => {
        const expandButton = [...document.querySelectorAll('button')]
          .find((button) => button.textContent?.includes('展开更多出版信息'))
        if (!expandButton) return false
        expandButton.click()
        return true
      })()`)
      if (!expanded) throw new Error('Could not expand the book publication metadata.')
      await delay(300)
      await capture('moke-detail.png')
    }
  }
} finally {
  socket.close()
  if (browser.exitCode === null) {
    browser.kill('SIGTERM')
    await new Promise((resolveExit) => browser.once('exit', resolveExit))
  }
  rmSync(profileDir, { recursive: true, force: true, maxRetries: 3, retryDelay: 100 })
}
