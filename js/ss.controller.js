const slideShowContainer = document.querySelector('.slideShow');
            const slidesContainer = document.querySelector('.slidesContainer');
            const rightBtn = document.querySelector('#slideRight');
            const leftBtn = document.querySelector('#slideLeft');
            const slideShowInterval = 8000;
            let slides = document.querySelectorAll('.slideCard');
            let index = 0;
            let currentSlide;
            let dots;

            const firstClone = slides[0].cloneNode(true);
            const lastClone = slides[slides.length - 1].cloneNode(true);

            firstClone.id = 'firstClone'
            lastClone.id = 'lastClone'

            slidesContainer.append(firstClone);
            slidesContainer.prepend(lastClone);
            var slideWidth = slides[index].clientWidth+4.5;
            window.addEventListener('resize',()=>{
                slideWidth = slides[index].clientWidth;
            })

            slidesContainer.style.transform = `translateX(${-slideWidth * index}px)`;
// -------------------- //


// ----- clone swap ----- // 
const slideCollection = () => document.querySelectorAll('.slideCard');

slidesContainer.addEventListener('transitionend', () => {
  slides = slideCollection();
  if (slides[index].id === firstClone.id) {
    index = 1;
    slidesContainer.style.transition = 'none';
    slidesContainer.style.transform = 'translateX(' + (-slideWidth * index) + 'px)';
  }
  slides = slideCollection();
  if (slides[index].id === lastClone.id) {
    index = slides.length - 2;
    slidesContainer.style.transition = 'none';
    slidesContainer.style.transform = 'translateX(' + (-slideWidth * index) + 'px)';
  }
});
// -------------------- //


// ----- nav buttons ----- //
const moveRight = () => {
  slides = slideCollection();
  if (index >= slides.length - 1) return;
  index++;
  slidesContainer.style.transition = 'transform 0.4s ease-in-out';
  slidesContainer.style.transform = 'translateX(' + ((-slideWidth * index)) + 'px)';
}

const moveLeft = () => {
  slides = slideCollection();
  if (index <= 0) return;
  index--;
  slidesContainer.style.transition = 'transform 0.4s ease-in-out';
  slidesContainer.style.transform = 'translateX(' + ((-slideWidth * index)) + 'px)';
  
}

rightBtn.addEventListener('click', moveRight);
leftBtn.addEventListener('click', moveLeft);
// -------------------- //


// ----- selection dots ----- //
const selectDotsGroup = () => document.querySelector('slideNumberDots');
const slideSelect = () => document.querySelectorAll('.slideDot');

// const setCurrentSlide = (slideDots) => {
//   slideDots = slideSelect();
//   slideDots[index - 1].classList.add('selectedSlide');
// };

// setCurrentSlide();
// -------------------- //


// ----- slide autoplay ----- //
const autoplay = () => {
  currentSlide = setInterval(() => {
    moveRight();
    
  }, slideShowInterval);
}

slidesContainer.addEventListener('mouseenter', () => {
  clearInterval(currentSlide);
})

slidesContainer.addEventListener('mouseleave', autoplay);

autoplay();
// -------------------- //


// ----- disclosure window scripts ----- // 
// open disclosure
let discBtn = document.getElementsByClassName("disclosurePrompt");
let disc;
for (disc = 0; disc < discBtn.length - 0; disc++) {
  discBtn[disc].addEventListener("click", function() {
    this.nextElementSibling.classList.add("discVisible");
  });
}

// close disclosure
let closeBtn = document.getElementsByClassName("fa-times");
let close;
for (close = 0; close < closeBtn.length - 0; close++) {
  closeBtn[close].addEventListener("click", function() {
    var slideDiscWindow = document.querySelectorAll(".discVisible");
    [].forEach.call(slideDiscWindow, function(el) {
      el.classList.remove("discVisible");
    });
  });
}

