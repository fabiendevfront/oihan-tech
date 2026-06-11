export const initTheme = () => {
  const toggle = document.getElementById("theme-toggle");
  const iconMoon = document.getElementById("icon-moon");
  const iconSun = document.getElementById("icon-sun");
  const html = document.documentElement;

  // Au chargement : on restaure la préférence sauvegardée
  if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
    iconMoon.classList.add("hidden");
    iconSun.classList.remove("hidden");
  }

  toggle.addEventListener("click", () => {
    html.classList.toggle("dark");
    const isDark = html.classList.contains("dark");

    // Sauvegarde dans localStorage pour persister entre les visites
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // Swap des icônes
    iconMoon.classList.toggle("hidden", isDark);
    iconSun.classList.toggle("hidden", !isDark);
  });
};
