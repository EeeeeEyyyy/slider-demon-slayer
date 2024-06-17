document.addEventListener('DOMContentLoaded', function () {
  let currentIndex = 0;
  const slides = document.querySelectorAll('.slides');
  const totalSlides = slides.length;
  document.querySelector('.next').addEventListener('click', function () {
    slides[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % totalSlides;
    slides[currentIndex].style.display = 'block';
  });
  document.querySelector('.previous').addEventListener('click', function () {
    slides[currentIndex].style.display = 'none';
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    slides[currentIndex].style.display = 'block';
  });
  slides.forEach((slide, index) => {
    slide.style.display = index === 0 ? 'block' : 'none';
  });
});
