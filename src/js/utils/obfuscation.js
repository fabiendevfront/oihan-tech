// Reconstructs protected email and phone links on the client side. Prevents basic HTML scrapers
export const initObfuscation = () => {
  // Reconstruct Email
  document.querySelectorAll(".protected-email").forEach((el) => {
    const user = el.getAttribute("data-user");
    const domain = el.getAttribute("data-domain");
    const email = `${user}@${domain}`;

    el.textContent = email;
    el.href = `mailto:${email}`;
  });

  // Reconstruct Phone
  document.querySelectorAll(".protected-phone").forEach((el) => {
    const p1 = el.getAttribute("data-part1");
    const p2 = el.getAttribute("data-part2");
    const p3 = el.getAttribute("data-part3");
    const p4 = el.getAttribute("data-part4");
    const p5 = el.getAttribute("data-part5");

    const phoneStr = `${p1} ${p2} ${p3} ${p4} ${p5}`;
    // Convert '06' to '+336' for the href link
    const phoneLink = `+33${p1.substring(1)}${p2}${p3}${p4}${p5}`;

    el.textContent = phoneStr;
    el.href = `tel:${phoneLink}`;
  });

  // Reconstruct Protected Text (Name, Address, SIRET)
  document.querySelectorAll(".protected-text").forEach((el) => {
    const textParts = [];
    let index = 1;

    // Dynamically collect data-part1, data-part2, etc.
    while (el.getAttribute(`data-part${index}`)) {
      textParts.push(el.getAttribute(`data-part${index}`));
      index++;
    }

    // Join the array elements with a space
    if (textParts.length > 0) {
      el.textContent = textParts.join(" ");
    }
  });
};
