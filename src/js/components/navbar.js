// Toggle mobile menu
export const initNavbar = () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navbar = document.querySelector("nav");
  const iconOpen = document.querySelector(".icon-open");
  const iconClose = document.querySelector(".icon-close");
  const menuLink = document.querySelectorAll("nav a");
  if (!menuToggle || !navbar || !iconOpen || !iconClose) return;
  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("hidden");
    navbar.classList.toggle("flex");
    menuToggle.setAttribute(
      "aria-expanded",
      menuToggle.getAttribute("aria-expanded") === "true" ? "false" : "true",
    );
    iconOpen.classList.toggle("hidden");
    iconClose.classList.toggle("hidden");
  });

  if (menuLink.length === 0) return;
  menuLink.forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.add("hidden");
      navbar.classList.remove("flex");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
};
