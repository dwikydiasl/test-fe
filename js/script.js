"use strict";
// add class scrolled
function handleScroll() {
  const body = document.body;
  const scrollY = window.scrollY || window.pageYOffset;
  const scrollThreshold = 50;

  if (scrollY > scrollThreshold) {
    body.classList.add("scrolled");
  } else {
    body.classList.remove("scrolled");
  }
}
window.addEventListener("scroll", handleScroll);
handleScroll();

jQuery(document).ready(function ($) {
  $(".owl-carousel").owlCarousel({
    center: true,
    items: 1.2,
    dots: true,
    loop: true,
    margin: 10,
  });
});
