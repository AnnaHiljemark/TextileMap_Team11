const header = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const siteNav = document.querySelector(".site-nav");
const navLinks = document.querySelectorAll(".site-nav a");
const backToTop = document.querySelector(".back-to-top");
const revealElements = document.querySelectorAll(".reveal");

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

window.addEventListener("scroll", () => {
  header.classList.toggle("scrolled", window.scrollY > 12);
  backToTop.classList.toggle("visible", window.scrollY > 700);
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach((element) => revealObserver.observe(element));

const sections = [...document.querySelectorAll("main section[id]")];

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      navLinks.forEach((link) => {
        const target = link.getAttribute("href");
        link.classList.toggle("active", target === `#${entry.target.id}`);
      });
    });
  },
  {
    rootMargin: "-35% 0px -55% 0px",
    threshold: 0,
  }
);

sections.forEach((section) => sectionObserver.observe(section));

const dashButtons = document.querySelectorAll(".dash-nav");

dashButtons.forEach((button) => {
  button.addEventListener("click", () => {
    dashButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
  });
});
