var slides=document.querySelector('.slider-items').children;
var nextSlide = document.querySelector('.right-slide')
var previousSlide = document.querySelector('.left-slide')
var index = 0
var totalSlides = slides.length

next = (direction) => {
    if ( direction=='next'){
        index++
        if(index==totalSlides){
            index = 0
        }
    }
    else{
        if(index == 0){
            index = totalSlides - 1
        }
        else{
            index--;
        }
    }
    for(let i = 0;i<slides.length;i++){
        slides[i].classList.remove('active')
    }
    slides[index].classList.add('active')
}