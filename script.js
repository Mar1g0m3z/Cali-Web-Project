const carouselImages = document.querySelector('.carousel-images');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

let currentIndex = 0;

function updateCarousel() {

	carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}


prevButton.addEventListener('click', () => {
	
	if (currentIndex > 0) {
		currentIndex--;
		updateCarousel();
	}
});


nextButton.addEventListener('click', () => {
	
	if (currentIndex < carouselItems.length - 1) {
		currentIndex++;
		updateCarousel();
	}
});

// Initialize carousel
updateCarousel();
