function toggleDarkMode() {
  const activeEls = Array.from(document.getElementsByClassName('active'));
  activeEls.forEach(el => el.classList.toggle('dark-mode'));
  document.querySelector('body').classList.toggle("dark-mode");
  this.classList.toggle("light");
};

document.addEventListener("DOMContentLoaded", () => {
  const darkModeBtn = document.querySelector('.dark-mode-toggle');
  darkModeBtn.onclick = toggleDarkMode;
});
