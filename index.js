// script.js
let slideIndex = 0;

function showSlide(index) {
  const slides = document.querySelectorAll(".slide");
  const dots = document.querySelectorAll(".dot");

  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  } else {
    slideIndex = index;
  }

  const offset = -slideIndex * 100;
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === slideIndex);
  });
}

function moveSlide(step) {
  showSlide(slideIndex + step);
}

function currentSlide(index) {
  showSlide(index);
}

// Initialize the slider
showSlide(slideIndex);
