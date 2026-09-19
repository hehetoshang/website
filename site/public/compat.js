(function () {
  var search = window.location.search || '';
  var modeMatch = /(?:^|[?&])mode=(full|lite)(?:&|$)/.exec(search);
  var requestedMode = modeMatch ? modeMatch[1] : '';
  var storage;

  try {
    storage = window.sessionStorage;
  } catch (error) {
    storage = null;
  }

  function readStoredMode() {
    try {
      return storage ? storage.getItem('moke-site-mode') : '';
    } catch (error) {
      return '';
    }
  }

  function storeMode(mode) {
    try {
      if (storage) storage.setItem('moke-site-mode', mode);
    } catch (error) {
      // Compatibility detection must continue when storage is unavailable.
    }
  }

  if (requestedMode === 'full') {
    storeMode('full');
    return;
  }

  if (requestedMode === 'lite') {
    storeMode('lite');
    window.location.replace('lite.html?source=manual');
    return;
  }

  if (readStoredMode() === 'full') return;
  if (readStoredMode() === 'lite') {
    window.location.replace('lite.html?source=preference');
    return;
  }

  var navigatorInfo = window.navigator || {};
  var userAgent = navigatorInfo.userAgent || '';
  var viewportWidth = window.innerWidth
    || document.documentElement.clientWidth
    || (window.screen && window.screen.width)
    || 1024;
  var screenWidth = window.screen && window.screen.width ? window.screen.width : viewportWidth;
  var effectiveWidth = Math.min(viewportWidth, screenWidth);
  var connection = navigatorInfo.connection || navigatorInfo.mozConnection || navigatorInfo.webkitConnection;
  var deviceMemory = Number(navigatorInfo.deviceMemory || 0);
  var processorCount = Number(navigatorInfo.hardwareConcurrency || 0);
  var isWatch = effectiveWidth <= 280
    || /watchOS|Apple Watch|Wear OS|Android Wear|SMARTWATCH|Tizen.+Mobile/i.test(userAgent);
  var isLegacyBrowser = Boolean(document.documentMode)
    || /MSIE|Trident/i.test(userAgent)
    || /Android [1-4]\./i.test(userAgent)
    || /OS [1-9]_/i.test(userAgent);
  var lacksCoreFeatures = !window.Promise
    || !window.fetch
    || !window.indexedDB
    || !window.matchMedia
    || !window.requestAnimationFrame
    || !window.CSS
    || !window.CSS.supports
    || !window.CSS.supports('display', 'grid')
    || !window.CSS.supports('color', 'var(--moke-check)');
  var savesData = Boolean(connection && connection.saveData);
  var hasVeryLowMemory = deviceMemory > 0 && deviceMemory <= 1;
  var isSmallLowCoreDevice = processorCount > 0 && processorCount <= 2 && effectiveWidth <= 480;
  var reason = '';

  if (isWatch) reason = 'watch';
  else if (isLegacyBrowser || lacksCoreFeatures) reason = 'browser';
  else if (savesData) reason = 'save-data';
  else if (hasVeryLowMemory || isSmallLowCoreDevice) reason = 'low-power';

  if (!reason) return;
  try {
    if (storage) storage.setItem('moke-lite-reason', reason);
  } catch (error) {
    // Reason persistence is optional.
  }
  window.location.replace('lite.html?source=' + reason);
})();
