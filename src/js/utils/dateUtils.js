// Automatically update the copyright year in the DOM.
export const updateCopyrightYear = () => {
  const yearElement = document.getElementById("copyright-year");

  if (yearElement) {
    const startYear = 2026;
    const currentYear = new Date().getFullYear();

    if (currentYear > startYear) {
      yearElement.textContent = `${startYear} - ${currentYear}`;
    } else {
      yearElement.textContent = startYear;
    }
  }
};
