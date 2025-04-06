let currentIndex = 0;
const HSlides = document.querySelectorAll('.HSlide');
const dotsContainer = document.querySelector('.dots');

function showHSlide(index) {
    if (index >= HSlides.length) currentIndex = 0;
    else if (index < 0) currentIndex = HSlides.length - 1;
    else currentIndex = index;

    HSlides.forEach((HSlide, i) => {
        HSlide.style.display = i === currentIndex ? 'block' : 'none';
    });

    updateDots();
}

function changeHSlide(step) {
    showHSlide(currentIndex + step);
}

function createDots() {
    HSlides.forEach((_, i) => {
        let dot = document.createElement('span');
        dot.classList.add('dot');
        dot.onclick = () => showHSlide(i);
        dotsContainer.appendChild(dot);
    });
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

createDots();
showHSlide(currentIndex);
