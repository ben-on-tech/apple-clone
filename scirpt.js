const sliderContainer = document.querySelector('.slider-container');
const slides = document.querySelectorAll('.slide');
const slideCount = slides.length;
let currentIndex = 0;
const slideInterval = 3000; // 3 seconds

function nextSlide() {
  currentIndex = (currentIndex + 1) % slideCount; // Loop back to the first slide
  updateSliderPosition();
}

function updateSliderPosition() {
  const translateValue = -currentIndex * 100 + '%';
  sliderContainer.style.transform = 'translateX(' + translateValue + ')';
}

// Start the automatic sliding
setInterval(nextSlide, slideInterval);