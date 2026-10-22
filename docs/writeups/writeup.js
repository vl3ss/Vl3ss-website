const root = document.documentElement;
try {
  const saved = localStorage.getItem('vl3ss-theme');
  if (saved) root.dataset.theme = saved;
} catch (_) { /* storage unavailable */ }

document.querySelector('#themeToggle').addEventListener('click', () => {
  const isDark = root.dataset.theme
    ? root.dataset.theme === 'dark'
    : matchMedia('(prefers-color-scheme: dark)').matches;
  root.dataset.theme = isDark ? 'light' : 'dark';
  try { localStorage.setItem('vl3ss-theme', root.dataset.theme); } catch (_) { /* storage unavailable */ }
});
document.querySelector('#year').textContent = new Date().getFullYear();
