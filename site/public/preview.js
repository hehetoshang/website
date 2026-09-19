(() => {
  const root = document.documentElement;
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const finePointer = window.matchMedia('(pointer: fine)');
  if (!reduceMotion.matches && finePointer.matches) {
    let animationFrame = 0;
    let nextX = window.innerWidth * 0.72;
    let nextY = window.innerHeight * 0.12;
    window.addEventListener('pointermove', (event) => {
      nextX = event.clientX;
      nextY = event.clientY;
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(() => {
        root.style.setProperty('--ambient-x', `${nextX}px`);
        root.style.setProperty('--ambient-y', `${nextY}px`);
        animationFrame = 0;
      });
    }, { passive: true });
  }

  const revealItems = [
    ...document.querySelectorAll([
      '.manifesto',
      '.features > *',
      '.dark-inner > *',
      '.platform-heading > *',
      '.platform-grid',
      '.platform-note',
      '.opensource > *',
      '.final-cta > *',
    ].join(',')),
  ];

  if (!reduceMotion.matches && 'IntersectionObserver' in window) {
    revealItems.forEach((item, index) => {
      item.classList.add('reveal-item');
      item.style.setProperty('--reveal-delay', `${(index % 3) * 60}ms`);
    });

    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -10% 0px', threshold: 0.12 });

    revealItems.forEach((item) => revealObserver.observe(item));
  }

  const preview = document.querySelector('[data-moke-preview]');
  if (!preview) return;

  const viewport = preview.querySelector('.compiled-moke-viewport');
  const frame = preview.querySelector('.moke-app-frame');
  const previewWindow = preview.querySelector('.window');
  const previewCaption = preview.querySelector('.preview-caption');
  const libraryStats = preview.querySelector('#moke-preview-library-stats');
  const status = preview.querySelector('#moke-preview-status');
  const deviceButtons = [...preview.querySelectorAll('.device-button[data-device]')];
  if (!viewport || !frame || !previewWindow || !previewCaption) return;

  const devices = {
    desktop: { width: 1100, height: 696, label: '桌面端' },
    tablet: { width: 820, height: 650, label: '平板端' },
    mobile: { width: 390, height: 844, label: '手机端' },
  };
  let activeDevice = 'desktop';
  let pendingDevice = null;
  let fadeTransitionTimer = 0;
  let deviceTransitionTimer = 0;

  const updateFrameScale = () => {
    const device = devices[activeDevice];
    const currentWidth = viewport.clientWidth;
    const currentHeight = viewport.clientHeight;
    if (!currentWidth || !currentHeight) return;
    viewport.style.setProperty('--moke-frame-scale', String(currentHeight / device.height));
  };

  const finishDeviceTransition = () => {
    window.clearTimeout(deviceTransitionTimer);
    preview.classList.remove('is-device-switching');
    pendingDevice = null;
    updateFrameScale();
  };

  const fitCompiledFrame = () => {
    const device = devices[activeDevice];
    const desktop = devices.desktop;
    const displayHeight = preview.clientWidth * desktop.height / desktop.width;
    const moduleWidth = Math.min(
      preview.clientWidth,
      displayHeight * device.width / device.height,
    );
    const borderWidth = previewWindow.offsetWidth - previewWindow.clientWidth;
    const moduleContentWidth = Math.max(0, moduleWidth - borderWidth);
    const moduleHeight = moduleContentWidth * device.height / device.width;
    previewWindow.style.width = `${moduleWidth}px`;
    previewCaption.style.width = `${moduleWidth}px`;
    viewport.style.aspectRatio = `${device.width} / ${device.height}`;
    viewport.style.height = `${moduleHeight}px`;
    frame.style.width = `${device.width}px`;
    frame.style.height = `${device.height}px`;
    updateFrameScale();
  };
  fitCompiledFrame();
  if ('ResizeObserver' in window) {
    new ResizeObserver(updateFrameScale).observe(viewport);
  } else {
    window.addEventListener('resize', updateFrameScale, { passive: true });
  }
  window.addEventListener('resize', fitCompiledFrame, { passive: true });

  const selectDeviceButton = (deviceName) => {
    deviceButtons.forEach((item) => {
      item.setAttribute('aria-pressed', String(item.dataset.device === deviceName));
    });
  };

  const applyDevice = (deviceName) => {
    activeDevice = deviceName;
    viewport.dataset.device = deviceName;
    status.textContent = `${devices[activeDevice].label} · 真实离线模式`;
    fitCompiledFrame();
  };

  const startDeviceResize = () => {
    window.clearTimeout(fadeTransitionTimer);
    if (!pendingDevice || pendingDevice === activeDevice) {
      preview.classList.remove('is-device-fading');
      pendingDevice = null;
      selectDeviceButton(activeDevice);
      return;
    }

    const nextDevice = pendingDevice;
    preview.classList.remove('is-device-fading');
    preview.classList.add('is-device-switching');
    previewWindow.getBoundingClientRect();
    applyDevice(nextDevice);
    window.clearTimeout(deviceTransitionTimer);
    deviceTransitionTimer = window.setTimeout(
      finishDeviceTransition,
      reduceMotion.matches ? 0 : 900,
    );
  };

  frame.addEventListener('transitionend', (event) => {
    if (
      event.propertyName === 'opacity'
      && preview.classList.contains('is-device-fading')
      && Number.parseFloat(getComputedStyle(frame).opacity) <= 0.01
    ) {
      startDeviceResize();
    }
  });

  previewWindow.addEventListener('transitionend', (event) => {
    if (event.propertyName === 'width') finishDeviceTransition();
  });

  deviceButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const deviceName = button.dataset.device;
      if (!devices[deviceName]) return;
      if (
        deviceName === activeDevice
        && !preview.classList.contains('is-device-fading')
        && !preview.classList.contains('is-device-switching')
      ) return;

      pendingDevice = deviceName;
      selectDeviceButton(deviceName);

      if (preview.classList.contains('is-device-switching')) {
        applyDevice(deviceName);
        window.clearTimeout(deviceTransitionTimer);
        deviceTransitionTimer = window.setTimeout(
          finishDeviceTransition,
          reduceMotion.matches ? 0 : 900,
        );
        return;
      }
      if (preview.classList.contains('is-device-fading')) return;

      preview.classList.add('is-device-fading');
      window.clearTimeout(fadeTransitionTimer);
      fadeTransitionTimer = window.setTimeout(
        startDeviceResize,
        reduceMotion.matches ? 0 : 400,
      );
    });
  });

  const demoServerUrl = 'https://demo.moke.local';
  const demoBooks = [
    ['1', '百年孤独', '加西亚·马尔克斯'],
    ['2', '月亮与六便士', '威廉·萨默塞特·毛姆'],
    ['3', '人类简史', '尤瓦尔·赫拉利'],
    ['4', '悉达多', '赫尔曼·黑塞'],
    ['5', '局外人', '阿尔贝·加缪'],
    ['6', '小王子', '圣埃克苏佩里'],
    ['7', '挪威的森林', '村上春树'],
    ['8', '瓦尔登湖', '亨利·梭罗'],
    ['9', '追风筝的人', '卡勒德·胡赛尼'],
    ['10', '1984', '乔治·奥威尔'],
  ];

  const refreshLibraryStats = () => new Promise((resolve, reject) => {
    const request = indexedDB.open('moke-offline-books');
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      const database = request.result;
      if (!database.objectStoreNames.contains('books')) {
        database.close();
        resolve([]);
        return;
      }
      const recordsRequest = database.transaction('books', 'readonly').objectStore('books').getAll();
      recordsRequest.onerror = () => {
        database.close();
        reject(recordsRequest.error);
      };
      recordsRequest.onsuccess = () => {
        const records = recordsRequest.result.filter((record) => record.serverUrl === demoServerUrl);
        const shelfCount = records.filter((record) => record.inShelf === true).length;
        if (libraryStats) {
          libraryStats.textContent = `墨客真实静态构建 · ${records.length} 本离线书籍 / ${shelfCount} 本已收藏`;
        }
        database.close();
        resolve(records);
      };
    };
  });

  let statsRefreshTimer = 0;
  const scheduleLibraryStatsRefresh = () => {
    window.clearTimeout(statsRefreshTimer);
    statsRefreshTimer = window.setTimeout(() => {
      void refreshLibraryStats().catch(() => {
        if (libraryStats) libraryStats.textContent = '墨客真实静态构建 · 离线书库数据暂不可用';
      });
    }, 350);
  };

  const seedCompiledMoke = () => new Promise((resolve, reject) => {
    localStorage.setItem('moke-privacy-consent', '2026-08-14');
    localStorage.setItem('moke-server-storage', JSON.stringify({
      state: {
        offlineMode: true,
        serverUrl: demoServerUrl,
        serverTitle: '',
        protocol: 'https',
        host: 'demo.moke.local',
        port: '',
        isConnected: false,
        token: '',
        user: null,
      },
      version: 0,
    }));
    localStorage.setItem('moke-view-prefs', JSON.stringify({
      state: { shelfViewMode: 'grid', libraryViewMode: 'grid', searchViewMode: 'grid' },
      version: 0,
    }));

    const request = indexedDB.open('moke-offline-books');
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains('books')) {
        request.result.createObjectStore('books', { keyPath: 'id' });
      }
    };
    request.onerror = () => reject(request.error);
    request.onsuccess = () => {
      const database = request.result;
      const transaction = database.transaction('books', 'readwrite');
      const store = transaction.objectStore('books');
      const now = Date.now();
      demoBooks.forEach(([bookId, title, author], index) => {
        store.put({
          id: `moke-demo-${bookId}-epub`,
          serverUrl: demoServerUrl,
          bookId,
          format: 'epub',
          title,
          author,
          inShelf: index < 5,
          fileName: `${bookId}.epub`,
          mimeType: 'application/epub+zip',
          size: 1024 * (index + 1),
          updatedAt: now - index * 60_000,
        });
      });
      transaction.oncomplete = () => {
        database.close();
        resolve();
      };
      transaction.onerror = () => {
        database.close();
        reject(transaction.error);
      };
    };
  });

  const loadCompiledMoke = () => {
    frame.addEventListener('load', () => {
      status.textContent = `${devices[activeDevice].label} · 真实离线模式`;
      scheduleLibraryStatsRefresh();
      try {
        frame.contentDocument?.addEventListener('click', scheduleLibraryStatsRefresh, true);
      } catch {
        // The preview remains usable if a browser isolates the sandboxed frame.
      }
    }, { once: true });
    frame.src = frame.dataset.src;
  };

  window.addEventListener('focus', scheduleLibraryStatsRefresh);
  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) scheduleLibraryStatsRefresh();
  });

  seedCompiledMoke()
    .then(() => refreshLibraryStats())
    .then(loadCompiledMoke)
    .catch(() => {
      if (libraryStats) libraryStats.textContent = '墨客真实静态构建 · 离线书库数据暂不可用';
      loadCompiledMoke();
    });
})();
