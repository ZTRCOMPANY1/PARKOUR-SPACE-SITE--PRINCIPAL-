
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const carousel = document.getElementById("carousel");

function updateCarousel() {
  const slideWidth = slides[0].clientWidth;
  carousel.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  updateCarousel();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  updateCarousel();
}

// Swipe para mobile
let startX = 0;
carousel.addEventListener("touchstart", e => {
  startX = e.touches[0].clientX;
});
carousel.addEventListener("touchend", e => {
  const endX = e.changedTouches[0].clientX;
  if (startX - endX > 50) nextSlide();
  else if (endX - startX > 50) prevSlide();
});

// Atualizar quando redimensionar
window.addEventListener("resize", updateCarousel);
