//Handle the "Back to Top" button visibility and scroll behavior.
export const initBackToTop = () => {
  const button = document.getElementById("back-to-top");

  if (!button) return;

  // Toggle button visibility based on scroll position
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      button.classList.remove("hidden");
      button.classList.add("flex");
    } else {
      button.classList.add("hidden");
      button.classList.remove("flex");
    }
  });

  // Smooth scroll to top when clicked
  button.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};
