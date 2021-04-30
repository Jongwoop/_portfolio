"use strict";

// Make navbar transparent when it is on the top
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  if (window.scrollY >= navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// Scroll to section
const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", (event) => {
  const target = event.target.dataset.link;
  if (target == null) {
    return;
  }
  document
    .querySelector(target)
    .scrollIntoView({ behavior: "smooth", block: "start" });
});

const contactBtn = document.querySelector(".home__contact");
const contact = document.querySelector("#contact");
contactBtn.addEventListener("click", () => {
  contact.scrollIntoView({ behavior: "smooth", block: "center" });
});
