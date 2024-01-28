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
const sliderPoI = document.querySelector('.sliderPoI');
const slidesPoI = document.querySelectorAll('.sliderPoI img');

const prevBtnPoI = document.getElementById('prevBtnPoI');
const nextBtnPoI = document.getElementById('nextBtnPoI');

let currentIndexPoI = 0;

function showSlidePoI(index) {
    const translateValue = -index * 100;
    sliderPoI.style.transform = `translateX(${translateValue}%)`;
}

function changeSlidePoI(direction) {
    currentIndexPoI += direction;

    if (currentIndexPoI < 0) {
        currentIndexPoI = slidesPoI.length - 1;
    } else if (currentIndexPoI >= slidesPoI.length) {
        currentIndexPoI = 0;
    }

    showSlidePoI(currentIndexPoI);
}

prevBtnPoI.addEventListener('click', () => changeSlidePoI(-1));
nextBtnPoI.addEventListener('click', () => changeSlidePoI(1));
  


//WtV btn scroll
const WtVbtn = document.getElementById('WtVbtn');

WtVbtn.addEventListener('click', function() {
  const PoITitleElement = document.querySelector('.WtV-title');

  if (PoITitleElement) {
    const offsetTop = PoITitleElement.offsetTop;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
});

//WtV Image Slider

const sliderWtV = document.querySelector('.sliderWtV');
const slidesWtV = document.querySelectorAll('.sliderWtV img');

const prevBtnWtV = document.getElementById('prevBtnWtV');
const nextBtnWtV = document.getElementById('nextBtnWtV');

let currentIndexWtV = 0;

function showSlide(index) {
    const translateValue = -index * 100;
    sliderWtV.style.transform = `translateX(${translateValue}%)`;
}

function changeSlide(direction) {
    currentIndexWtV += direction;

    if (currentIndexWtV < 0) {
        currentIndexWtV = slidesWtV.length - 1;
    } else if (currentIndexWtV >= slidesWtV.length) {
        currentIndexWtV = 0;
    }

    showSlide(currentIndexWtV);
}

prevBtnWtV.addEventListener('click', () => changeSlide(-1));
nextBtnWtV.addEventListener('click', () => changeSlide(1)); 


//WtE btn scroll
const WtEbtn = document.getElementById('WtEbtn');

WtEbtn.addEventListener('click', function() {
  const PoITitleElement = document.querySelector('.WtE-title');

  if (PoITitleElement) {
    const offsetTop = PoITitleElement.offsetTop;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
});