$(document).ready(function(){
  $('.burgers__slider').slick({
    slidesToShow: 1,
    prevArrow: $('.slider-arrow-burger-prev'),
    nextArrow: $('.slider-arrow-burger-next'),
  });
});


document.querySelectorAll('.composition-btn').forEach((elem)=>{
  elem.onclick = () =>{
    elem.classList.toggle('show-composition');
  }
})