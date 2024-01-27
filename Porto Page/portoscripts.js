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
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function changeSlide(direction) {
    if (slider.children.length > 0) {
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = slider.children.length - 1;
    } else if (currentIndex >= slider.children.length) {
        currentIndex = 0;
    }

    const translateValue = -currentIndex * 100;
    slider.style.transform = `translateX(${translateValue}%)`;
    }
}

prevBtn.addEventListener('click', () => changeSlide(-1));
nextBtn.addEventListener('click', () => changeSlide(1));


  
  
  