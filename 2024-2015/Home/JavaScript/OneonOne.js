const carousel = document.getElementById("one-on-one-carousel");
const prevArrow = document.getElementById("prevArrow");
const nextArrow = document.getElementById("nextArrow");
const cards = document.querySelectorAll(".one-on-one-card");


let currentIndex = 0;

// Function to update carousel position
function updateCarousel() {
  const offset = currentIndex * -100; // Calculate the transform offset
  carousel.style.transform = `translateX(${offset}%)`;
}

// Add event listeners for arrow buttons
prevArrow.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + cards.length) % cards.length; // Decrement with wrap-around
  updateCarousel();
});

nextArrow.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % cards.length; // Increment with wrap-around
  updateCarousel();
});


// Auto-scroll functionality (optional)
setInterval(() => {
  currentIndex = (currentIndex + 1) % cards.length; // Loop back to the first card
  updateCarousel();
}, 5000);

// Initialize the carousel on page load
updateCarousel();
