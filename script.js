const carouselImages = document.querySelector('.carousel-images');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let currentIndex = 0;

function updateCarousel() {
	// Move the carousel to show the current item based on index
	carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Event listener for the Previous button
prevButton.addEventListener('click', () => {
	// Only move to the previous image if currentIndex is greater than 0
	if (currentIndex > 0) {
		currentIndex--;
		updateCarousel();
	}
});

// Event listener for the Next button
nextButton.addEventListener('click', () => {
	// Only move to the next image if currentIndex is less than the last item index
	if (currentIndex < carouselItems.length - 1) {
		currentIndex++;
		updateCarousel();
	}
});

// Initialize carousel
updateCarousel();
