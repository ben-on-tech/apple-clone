const sliderContainer = document.querySelector('.section5');
const slides = document.querySelectorAll('.slide');
const numSlides = slides.length - 1; // Exclude the duplicate from the main count
let currentIndex = 0;
const slideIntervalTime = 5000;
const transitionDuration = 5;
let slideInterval;

function goToSlide(index, animated = true) {
    if (index >= 0 && index <= numSlides) {
        currentIndex = index;
        const translateXValue = -currentIndex * 100 + 'vw';
        sliderContainer.style.transition = animated ? `transform ${transitionDuration}s ease-in-out` : 'none';
        sliderContainer.style.transform = `translateX(${translateXValue})`;
    }
}

function startSlider() {
    slideInterval = setInterval(() => {
        currentIndex++;
        if (currentIndex > numSlides) {
            // Instantly jump back to the first slide (before the duplicate)
            goToSlide(0, false); // No animation for the jump
            // Force a reflow
            sliderContainer.offsetHeight;
            // Then transition to the next slide (which will be the second)
            currentIndex = 1;
            goToSlide(1);
        } else {
            goToSlide(currentIndex);
        }
    }, slideIntervalTime);
}
startSlider();