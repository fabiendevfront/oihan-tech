import { initNavbar } from "./components/navbar.js";
import { initTheme } from "./components/theme.js";
import { initModal } from "./components/modal.js";
import { initContactForm } from "./components/contactForm.js";
import { initObfuscation } from "./utils/obfuscation.js";
import { updateCopyrightYear } from "./utils/dateUtils.js";
import { initBackToTop } from "./components/backToTop.js";

// Toggle mobile menu
initNavbar();
// Toggle dark mode
initTheme();
// Generate service modal
initModal();
// Handle contact form submission
initContactForm();
// Reconstruct protected contact info
initObfuscation();
// Update dynamic dates
updateCopyrightYear();
// Back to Top function
initBackToTop();
