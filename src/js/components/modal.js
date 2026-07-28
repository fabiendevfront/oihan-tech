// Service modal
import { servicesData } from "../data/servicesData.js";

export const initModal = () => {
  const modal = document.getElementById("service-modal");
  const closeBtn = document.getElementById("close-modal");
  const modalCtaBtn = document.getElementById("modal-cta-btn");

  // Modal content targets
  const modalTitle = document.getElementById("modal-title");
  const modalIntro = document.getElementById("modal-intro");
  const modalFeatures = document.getElementById("modal-features");

  // Get all buttons that should open the modal
  const openButtons = document.querySelectorAll(
    'button[aria-haspopup="dialog"]',
  );

  if (!modal || !closeBtn || !modalCtaBtn) return;

  /**
   * Populate modal with specific service data
   * @param {string} serviceKey - The key corresponding to servicesData
   */
  const populateModal = (serviceKey) => {
    // Check if the service exists in our data
    if (!servicesData[serviceKey]) return;

    const data = servicesData[serviceKey];

    // Inject text content
    modalTitle.textContent = data.title;
    modalIntro.textContent = data.intro;

    // Inject list items (features)
    modalFeatures.innerHTML = data.features
      .map(
        (feature) => `
        <li class="flex items-start gap-3 text-oihan-dark/80 dark:text-white/80">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check text-oihan-primary dark:text-oihan-light flex-shrink-0 mt-0.5">
            <path d="M20 6 9 17l-5-5"/>
          </svg>
          <span class="text-base">${feature}</span>
        </li>
      `,
      )
      .join("");
  };

  // Event Listeners for Open Buttons
  openButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Get the data-service attribute
      const serviceKey = button.getAttribute("data-service");

      populateModal(serviceKey);

      modal.showModal();
    });
  });

  // Event Listener for Close Button
  closeBtn.addEventListener("click", () => {
    modal.close();
  });

  // Close modal when click on CTA button
  modalCtaBtn.addEventListener("click", () => {
    modal.close();
  });

  // Close modal when clicking outside it
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });
};
