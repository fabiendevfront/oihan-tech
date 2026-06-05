// Toggle mobile menu
export const initNavbar = () => {
  const menuToggle = document.querySelector(".menu-toggle");
  if (!menuToggle) return;
  menuToggle.addEventListener("click", () => {
    const navbar = document.querySelector("nav");
    const iconOpen = document.querySelector(".icon-open");
    const iconClose = document.querySelector(".icon-close");
    if (!navbar) return;
    if (!iconOpen) return;
    if (!iconClose) return;
    navbar.classList.toggle("hidden");
    navbar.classList.toggle("flex");
    menuToggle.setAttribute(
      "aria-expanded",
      menuToggle.getAttribute("aria-expanded") === "true" ? "false" : "true",
    );
    iconOpen.classList.toggle("hidden");
    iconClose.classList.toggle("hidden");
  });
  const menuLink = document.querySelectorAll("nav a");
  if (menuLink.length === 0) return;
  menuLink.forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelector("nav").classList.add("hidden");
      document.querySelector("nav").classList.remove("flex");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
};
