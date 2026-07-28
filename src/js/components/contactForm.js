/**
 * Initializes the contact form handling via Web3Forms API.
 * Prevents default page redirection and displays an inline success/error message.
 */
export const initContactForm = () => {
  const contactForm = document.getElementById("contact-form");
  const formResult = document.getElementById("form-result");

  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalBtnText = submitButton.innerText;

      // Update UI for loading state
      submitButton.innerText = "Envoi en cours...";
      submitButton.disabled = true;

      const formData = new FormData(contactForm);

      try {
        // Send data to Web3Forms endpoint
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData,
        });

        const data = await response.json();
        formResult.classList.remove("hidden");

        if (data.success) {
          // Handle successful submission
          formResult.className =
            "mt-2 rounded-xl p-4 text-center font-bold transition-all duration-300 bg-oihan-primary/10 text-oihan-primary dark:text-oihan-light dark:bg-white/10";
          formResult.innerHTML =
            "✅ Merci ! Votre message a bien été envoyé. Je vous réponds très vite.";

          contactForm.reset();
          if (window.hcaptcha) hcaptcha.reset();
        } else {
          // Handle Web3Forms server errors
          formResult.className =
            "mt-2 rounded-xl p-4 text-center font-bold transition-all duration-300 bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400";
          formResult.innerHTML = `❌ Une erreur est survenue : ${data.message}`;
        }
      } catch (error) {
        // Handle network/client-side errors
        formResult.classList.remove("hidden");
        formResult.className =
          "mt-2 rounded-xl p-4 text-center font-bold transition-all duration-300 bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400";
        formResult.innerHTML =
          "❌ Impossible d'envoyer le message. Vérifiez votre connexion réseau.";
      } finally {
        // Restore initial button state
        submitButton.innerText = originalBtnText;
        submitButton.disabled = false;
      }
    });
  }
};
