const sliderWrapper = document.querySelector(".slider-wrapper");
const images = document.querySelectorAll(".slider-wrapper img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let currentIndex = 0;

// Function to update slider position
function updateSlider() {
  const offset = currentIndex * -100;
  sliderWrapper.style.transform = `translateX(${offset}%)`;
}

// Automatic sliding
let autoSlide = setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
}, 3000);

// Manual navigation
prevBtn.addEventListener("click", () => {
  clearInterval(autoSlide);
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
  autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
  }, 3000);
});

nextBtn.addEventListener("click", () => {
  clearInterval(autoSlide);
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
  autoSlide = setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
  }, 3000);
});
