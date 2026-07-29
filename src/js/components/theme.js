// Toggle Light & dark theme
export const initTheme = () => {
  const toggle = document.getElementById("theme-toggle");
  const iconMoon = document.getElementById("icon-moon");
  const iconSun = document.getElementById("icon-sun");
  const html = document.documentElement;

  // On load: restore the saved preference
  if (localStorage.getItem("theme") === "dark") {
    html.classList.add("dark");
    iconMoon.classList.add("hidden");
    iconSun.classList.remove("hidden");
  }

  toggle.addEventListener("click", () => {
    html.classList.toggle("dark");
    const isDark = html.classList.contains("dark");

    // Save to localStorage to retain data across visits
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // Swap icons
    iconMoon.classList.toggle("hidden", isDark);
    iconSun.classList.toggle("hidden", !isDark);
  });
};
