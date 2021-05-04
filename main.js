"use strict";

// Make navbar button to scroll into each section
const navbarMenu = document.querySelector(".navbar__menu");

navbarMenu.addEventListener("click", (event) => {
  const link = event.target.dataset.link;
  if (link == null) {
    return;
  }
  scrollIntoView(link);
  navbarMenu.classList.remove("open");
});

// Make border of the navbar button to be left per each section
const sections = document.querySelectorAll("section");
const options = {
  root: null, //viewport
  rootMargin: "0px", // from the window
  threshold: 0.3,
};
const callback = (entries, observer) => {
  entries.forEach((entry) => {
    let navItem = document.querySelector(`[data-link="#${entry.target.id}"]`);
    if (entry.isIntersecting) {
      navItem.classList.add("active");
    } else {
      navItem.classList.remove("active");
    }
  });
};
const observer = new IntersectionObserver(callback, options);
sections.forEach((section) => observer.observe(section));

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

// Navbar toggle btn for small screen
const toggleBtn = document.querySelector(".navbar__toggle-btn");
toggleBtn.addEventListener("click", () => {
  navbarMenu.classList.toggle("open");
});

// Make home slowly fade to transparent as the window scrolls down

const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  home.style.opacity = 1 - window.scrollY / homeHeight;
});

// Handle click on "contact me" button on home
const contactBtn = document.querySelector(".home__contact");
contactBtn.addEventListener("click", () => {
  scrollIntoView("#contact");
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({ behavior: "smooth", block: "start" });
}

// Show "Arrow up" button when scrolling down
const arrowBtn = document.querySelector(".arrow-up");

document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowBtn.classList.add("visible");
  } else {
    arrowBtn.classList.remove("visible");
  }
});
arrowBtn.addEventListener("click", () => {
  scrollIntoView("#home");
});

// Project Filtering
const workBtnContainer = document.querySelector(".work__categories");
const projectsContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

workBtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;

  // Remove selection from the previous item and
  const active = document.querySelector(".category__btn.selected");
  const target =
    e.target.nodeName === "BUTTON" ? e.target : e.target.parentNode;
  target.classList.add("selected");
  active.classList.remove("selected");

  if (filter === null) {
    return;
  }
  count(filter);
  projectsContainer.classList.add("anim-out");
  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === "*" || project.dataset.type === filter) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    projectsContainer.classList.remove("anim-out");
  }, 200);
});

function count(filter) {
  const toBeCount = document.querySelector(
    `.category__btn[data-filter="${filter}"]>span`
  );
  let count = document.querySelectorAll(`.project[data-type="${filter}"`)
    .length;
  if (filter === "*") {
    count = projects.length;
  }
  toBeCount.innerHTML = count;
}
