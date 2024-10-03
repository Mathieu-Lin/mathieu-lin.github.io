let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-images img');

function changeSlide(direction) {
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex + direction + slides.length) % slides.length;
    slides[slideIndex].classList.add('active');
}

// Initialiser la première image
slides[slideIndex].classList.add('active');
