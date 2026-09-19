import { cp, mkdir, rm } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const siteDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const outputDir = path.join(siteDir, 'dist')

await rm(outputDir, { recursive: true, force: true })
await mkdir(outputDir, { recursive: true })
await cp(path.join(siteDir, 'public'), outputDir, { recursive: true })
await cp(path.join(siteDir, 'index.html'), path.join(outputDir, 'index.html'))

console.log(`Static website copied to ${outputDir}`)
