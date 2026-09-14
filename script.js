const WHATSAPP_NUMBER = "5490000000000";

const buildWhatsAppLink = (message) => {
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
};

const toggleMenu = () => {
  const nav = document.querySelector(".main-nav");
  const toggle = document.querySelector(".nav-toggle");

  if (!nav || !toggle) return;

  const isOpen = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(isOpen));
};

document.querySelector(".nav-toggle")?.addEventListener("click", toggleMenu);

document.querySelectorAll(".main-nav a").forEach((link) => {
  link.addEventListener("click", () => {
    const nav = document.querySelector(".main-nav");
    const toggle = document.querySelector(".nav-toggle");
    if (nav && nav.classList.contains("open")) {
      nav.classList.remove("open");
      toggle?.setAttribute("aria-expanded", "false");
    }
  });
});

document.querySelectorAll(".whatsapp-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");
    if (!href || !href.includes("wa.me")) {
      event.preventDefault();
      window.open(buildWhatsAppLink("Hola, quiero solicitar un turno."), "_blank", "noopener,noreferrer");
    }
  });
});

AOS.init({
  duration: 900,
  once: true,
  offset: 35,
  easing: "ease-out-cubic",
});
