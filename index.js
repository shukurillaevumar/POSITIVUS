const slider = document.querySelector(".card-list");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 0;

function updateSliderPosition() {
  const cardWidth = slider.querySelector(".card-item").clientWidth;
  slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updateSliderPosition();
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex < slider.children.length - 1) {
    currentIndex++;
    updateSliderPosition();
  }
});

window.addEventListener("resize", updateSliderPosition);
