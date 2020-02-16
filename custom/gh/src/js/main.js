
let slides=Array.from(document.querySelectorAll('.slides'))

let currentSlideArr=Array.from(document.querySelectorAll('.current-slide'))

let currentSlide=0;


for (let i=0;i<slides.length;i++){
  slides[i].style.display='none'
}
slides[0].style.display='block'


let leftArrow=document.querySelector('.left-arrow')
let rightArrow=document.querySelector('.right-arrow')
leftArrow.onclick=function () {
  currentSlideArr[currentSlide].classList.remove('current-slide-js-class')
  slides[currentSlide].style.display='none';
  (currentSlide==0)?currentSlide=4:currentSlide-=1//currentSlide-=1
  slides[currentSlide].style.display='block'
  currentSlideArr[currentSlide].classList.add('current-slide-js-class')
}
rightArrow.onclick=function () {
  currentSlideArr[currentSlide].classList.remove('current-slide-js-class')
  slides[currentSlide].style.display='none';
  (currentSlide==4)?currentSlide=0:currentSlide+=1//currentSlide-=1
  slides[currentSlide].style.display='block'
  currentSlideArr[currentSlide].classList.add('current-slide-js-class')
}



let sliderSlides=Array.from(document.querySelectorAll('.slide'))

let currentSliderSlide=0;

let leftSliderArrow=document.querySelector('.left-slider-arrow')
let rightSliderArrow=document.querySelector('.right-slider-arrow')

let currentSlideItemArr=Array.from(document.querySelectorAll('.current-slide-item'))

for (let i=0;i<sliderSlides.length;i++){
  sliderSlides[i].style.display='none'
}
sliderSlides[0].style.display='block'


leftSliderArrow.onclick=function () {
  currentSlideItemArr[currentSliderSlide].classList.remove('current-slide-js-class')
  sliderSlides[currentSliderSlide].style.display='none';
  (currentSliderSlide==0)?currentSliderSlide=4:currentSliderSlide-=1//currentSlide-=1
  sliderSlides[currentSliderSlide].style.display='block'
  currentSlideItemArr[currentSliderSlide].classList.add('current-slide-js-class')
}
rightSliderArrow.onclick=function () {
  currentSlideItemArr[currentSliderSlide].classList.remove('current-slide-js-class')
  sliderSlides[currentSliderSlide].style.display='none';
  (currentSliderSlide==4)?currentSliderSlide=0:currentSliderSlide+=1//currentSlide-=1
  sliderSlides[currentSliderSlide].style.display='block'
  currentSlideItemArr[currentSliderSlide].classList.add('current-slide-js-class')
}
