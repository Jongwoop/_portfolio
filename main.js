"use strict";
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  console.log(window.scrollY);
  if (window.scrollY >= navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    // console.log("not yet");
    navbar.classList.remove("navbar--dark");
  }
});

// document.ready(function () {
//   // Transition effect for navbar
//   $(window).scroll(function () {
//     // checks if window is scrolled more than 500px, adds/removes solid class
//     if ($(this).scrollTop() > 500) {
//       // $(".navbar").addClass("solid");
//       navbar.style.background = "var(--color-pink)";
//     } else {
//       // $(".navbar").removeClass("solid");
//       navbar.stlye.background = "transparent";
//     }
//   });
// });
