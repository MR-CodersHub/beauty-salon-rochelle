/**
 * ROCHELLE AT-HOME | Theme & Accessibility Manager
 * Manages Dark/Light Theme and LTR/RTL Layout Modes
 */

(function () {
  const THEME_KEY = 'rochelle_theme_mode';
  const DIR_KEY = 'rochelle_direction_mode';

  function applyStoredTheme() {
    const savedTheme = localStorage.getItem(THEME_KEY);
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

    const savedDir = localStorage.getItem(DIR_KEY);
    if (savedDir === 'rtl') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    } else {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'en');
    }
  }

  // Apply immediately before DOM render to prevent flashing
  applyStoredTheme();

  window.toggleTheme = function () {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem(THEME_KEY, isDark ? 'dark' : 'light');
    updateThemeIcons();
  };

  window.toggleRTL = function () {
    const currentDir = document.documentElement.getAttribute('dir') || 'ltr';
    const newDir = currentDir === 'ltr' ? 'rtl' : 'ltr';
    document.documentElement.setAttribute('dir', newDir);
    document.documentElement.setAttribute('lang', newDir === 'rtl' ? 'ar' : 'en');
    localStorage.setItem(DIR_KEY, newDir);
    updateRtlButton();
  };

  function updateThemeIcons() {
    const isDark = document.documentElement.classList.contains('dark');
    document.querySelectorAll('.theme-icon-light').forEach(el => el.style.display = isDark ? 'inline-block' : 'none');
    document.querySelectorAll('.theme-icon-dark').forEach(el => el.style.display = isDark ? 'none' : 'inline-block');
  }

  function updateRtlButton() {
    const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
    document.querySelectorAll('.rtl-status-text').forEach(el => el.innerText = isRtl ? 'LTR' : 'RTL');
  }

  document.addEventListener('DOMContentLoaded', () => {
    updateThemeIcons();
    updateRtlButton();
  });
})();
