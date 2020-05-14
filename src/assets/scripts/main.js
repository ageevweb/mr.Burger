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



document.querySelectorAll('.team-accord__header').forEach(function(elem){
  elem.onclick = function(){

    document.querySelectorAll('.team-accord__header').forEach(function(elem2){
      elem2.classList.remove("active");
      elem2.nextElementSibling.style.maxHeight = null;
    })

    this.classList.toggle("active");
    var contentAcc = this.nextElementSibling;
    if (contentAcc.style.maxHeight){
      contentAcc.style.maxHeight = null;
    } else {
      contentAcc.style.maxHeight = contentAcc.scrollHeight + "px";
    } 
  }
})




document.querySelectorAll('.menu-acco__header').forEach(function(elem){
  elem.onclick = function(){

    document.querySelectorAll('.menu-acco__header').forEach(function(elem2){
      elem2.classList.remove("active");
      elem2.nextElementSibling.style.maxWidth = null;
    })

    this.classList.toggle("active");
    var contentAcc = this.nextElementSibling;
    if (contentAcc.style.maxWidth){
      contentAcc.style.maxWidth = null;
    } else {
      contentAcc.style.maxWidth = '600px';
    } 
  }
})




document.querySelector('.btnn-order').onclick = (e) => {
  e.preventDefault();
  
  let orderName = document.querySelector('#orderName').value,
      orderPhone = document.querySelector('#orderPhone').value,
      orderStreet = document.querySelector('#orderStreet').value,
      orderK = document.querySelector('#orderK').value,
      orderApp = document.querySelector('#orderApp').value,
      orderFloor = document.querySelector('#orderFloor').value,
      orderComm = document.querySelector('#orderComm').value
  

  

  
}

document.querySelector('.btnn-reset').onclick = (e) => {
  e.preventDefault()
  document.querySelector('.order-form').reset()
}


ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map("map", {
      // Координаты центра карты.
      // Порядок по умолчанию: «широта, долгота».
      // Чтобы не определять координаты центра карты вручную,
      // воспользуйтесь инструментом Определение координат.
      center: [55.76, 37.64],
      // Уровень масштабирования. Допустимые значения:
      // от 0 (весь мир) до 19.
      zoom: 7
  });
}



new fullpage('#fullpage', {
  // licenseKey: 'YOUR KEY HERE',
  // sectionsColor: ['yellow', 'orange', '#C0C0C0', '#ADD8E6'],
  // anchors:['firstPage', 'secondPage', 'thirdPage']

  menu: '#menu',
	lockAnchors: false,
	anchors:['welcomePage', 'virtuesPage', 'burgersPage', 'teamPage', 'menuPage', 'commentsPage', 'howWorkPage', 'orderPage', 'mapPage'],
	navigation: false,
	navigationPosition: 'right',
	navigationTooltips: ['firstSlide', 'secondSlide'],
});


// new fullpage('#fullpage', {
//   anchors: ['page1', 'page2', 'page3', 'page4'],
//   navigationTooltips: ['fullPage', 'Open', 'Easy', 'Touch'],
//   css3: true,
//   scrollingSpeed: 1000,
//   navigation: true,
//   slidesNavigation: true,
//   responsiveHeight: 330,
//   dragAndMove: true,
//   dragAndMoveKey: 'YWx2YXJvdHJpZ28uY29tX0EyMlpISmhaMEZ1WkUxdmRtVT0wWUc=',
//   controlArrows: false
// });