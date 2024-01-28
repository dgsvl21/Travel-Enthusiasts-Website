//arrow down animation btn
function scrollToMain() {
const mainSection = document.getElementById("main");
window.scrollTo({
    top: mainSection.offsetTop,
    behavior: "smooth"
})
}

//scroll to-top btn
function scrollToTop() {
window.scrollTo({
    top: 0,
    behavior: "smooth"
})
}

//PoI btn scroll
const PoIbtn = document.getElementById('PoIbtn');

PoIbtn.addEventListener('click', function() {
  const PoITitleElement = document.querySelector('.PoI-title');

  if (PoITitleElement) {
    const offsetTop = PoITitleElement.offsetTop;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
});


//PoI Image Slider
const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slider img');

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function showSlide(index) {
    const translateValue = -index * 100;
    slider.style.transform = `translateX(${translateValue}%)`;
}

function changeSlide(direction) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = slides.length - 1;
    } else if (currentIndex >= slides.length) {
        currentIndex = 0;
    }

    showSlide(currentIndex);
}

prevBtn.addEventListener('click', () => changeSlide(-1));
nextBtn.addEventListener('click', () => changeSlide(1));
  
  