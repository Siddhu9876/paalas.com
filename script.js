const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".site-nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    menuButton.setAttribute("aria-label", open ? "Open navigation" : "Close navigation");
    navigation.classList.toggle("is-open", !open);
  });
  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("is-open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
    });
  });
}

document.querySelectorAll("[data-photo-slot]").forEach((photo) => {
  const frame = photo.closest(".hero-photo-frame, .about-photo-frame");
  const fallback = frame?.querySelector(".photo-fallback");
  const showPhoto = () => {
    photo.hidden = false;
    if (fallback) fallback.hidden = true;
  };
  const showFallback = () => {
    photo.hidden = true;
    if (fallback) fallback.hidden = false;
  };
  photo.addEventListener("load", showPhoto);
  photo.addEventListener("error", showFallback);
  if (photo.complete) {
    if (photo.naturalWidth > 0) showPhoto();
    else showFallback();
  }
});

const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window && !window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
