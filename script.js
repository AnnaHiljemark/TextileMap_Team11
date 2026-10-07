const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav a");
const sections = document.querySelectorAll("section[id]");

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;

    navLinks.forEach(link => {
      link.classList.toggle(
        "active",
        link.getAttribute("href") === `#${entry.target.id}`
      );
    });
  });
}, {
  rootMargin: "-30% 0px -60% 0px"
});

sections.forEach(section => observer.observe(section));

document.querySelectorAll(".prototype-nav").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".prototype-nav").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
  });
});
