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
  
  let orderName = document.querySelector('#orderName'),
      orderPhone = document.querySelector('#orderPhone'),
      orderStreet = document.querySelector('#orderStreet'),
      orderBuild = document.querySelector('#orderBuild')
      orderK = document.querySelector('#orderK'),
      orderApp = document.querySelector('#orderApp'),
      orderFloor = document.querySelector('#orderFloor'),
      orderComm = document.querySelector('#orderComm')

      if(orderName.value.length < 1){
        orderName.classList.add('inp-error')
      } else { 
        orderName.classList.remove('inp-error')
      }

      if(orderPhone.value.length < 16){
        orderPhone.classList.add('inp-error')
      } else { 
        orderPhone.classList.remove('inp-error')
      }

      if(orderStreet.value.length < 1){
        orderStreet.classList.add('inp-error')
      } else { 
        orderStreet.classList.remove('inp-error')
      }

      if(orderBuild.value.length < 1){
        orderBuild.classList.add('inp-error')
      } else { 
        orderBuild.classList.remove('inp-error')
      }
  

  

  
}

document.querySelector('.btnn-reset').onclick = (e) => {
  e.preventDefault()
  document.querySelector('.order-form').reset()
}

ymaps.ready(init);

var placemarks = [
    {
        latitude: 59.97,
        longitude: 30.31,
        hintContent: '<div class="map__hint">ул. Литераторов, д. 19</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="/assets/images/burger.png" alt="Бургер"/>',
            '<p>Самые вкусные бургеры у нас!<br>Заходите по адресу: ул. Литераторов, д. 19</p>',
            '</div>'
        ]
    },
    {
        latitude: 59.94,
        longitude: 30.25,
        hintContent: '<div class="map__hint">Малый проспект В О, д 64</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="/assets/images/burger.png" alt="Бургер"/>',
            '<p>Самые вкусные бургеры у нас!<br>Заходите по адресу: Малый проспект В О, д 64</p>',
            '</div>'
        ]
    },
    {
        latitude: 59.93,
        longitude: 30.34,
        hintContent: '<div class="map__hint">наб. реки Фонтанки, д. 56</div>',
        balloonContent: [
            '<div class="map__balloon">',
            '<img class="map__burger-img" src="/assets/images/burger.png" alt="Бургер"/>',
            '<p>Самые вкусные бургеры у нас!<br>Заходите по адресу: наб. реки Фонтанки, д. 56</p>',
            '</div>'
        ]
    }
],
    geoObjects= [];

function init() {
    var map = new ymaps.Map('map', {
        center: [59.943026, 30.293884],
        zoom: 12,
        controls: ['zoomControl'],
        behaviors: ['drag']
    });

    for (var i = 0; i < placemarks.length; i++) {
            geoObjects[i] = new ymaps.Placemark([placemarks[i].latitude, placemarks[i].longitude],
            {
                hintContent: placemarks[i].hintContent,
                balloonContent: placemarks[i].balloonContent.join('')
            },
            {
                iconLayout: 'default#image',
                iconImageHref: 'assets/images/map-marker.png',
                iconImageSize: [46, 57],
                iconImageOffset: [-23, -57],
                iconImageClipRect: [[415, 0], [461, 57]]
            });
    }

    var clusterer = new ymaps.Clusterer({
        clusterIcons: [
            {
                href: '/assets/images/burger.png',
                size: [100, 100],
                offset: [-50, -50]
            }
        ],
        clusterIconContentLayout: null
    });

    map.geoObjects.add(clusterer);
    clusterer.add(geoObjects);
}
















new fullpage('#fullpage', {
  menu: '#menu',
	lockAnchors: false,
	anchors:['welcomePage', 'virtuesPage', 'burgersPage', 'teamPage', 'menuPage', 'commentsPage', 'howWorkPage', 'orderPage', 'mapPage'],
	navigation: false,
	navigationPosition: 'right',
	navigationTooltips: ['firstSlide', 'secondSlide'],
});


document.querySelector('.adapt__btn').onclick = function(){
  if(document.querySelector('#b').checked){
    this.classList.toggle('active')
  }
}



document.querySelectorAll('.adapt-item').forEach((elem)=> {
  elem.onclick = function(){
    document.querySelector('.adapt__btn').classList.remove('active')
    document.querySelector('#b').checked = false
  }
})


window.onhashchange = function() { 
  let hash = window.location.hash.substring(1);
  if (hash == 'welcomePage') {
    document.querySelector('.adapt__btn').style.display = 'none';
  } else {
    document.querySelector('.adapt__btn').style.display = 'block';
  }

}


let elementTele = document.getElementById('orderPhone');
let maskOptions = {
    mask: '+7(000)000-00-00',
    lazy: true
}
let mask = new IMask(elementTele, maskOptions);











document.querySelectorAll('.comments__btn').forEach(function(elem){
  elem.onclick = function(){
    document.querySelector('.modal__name').innerText = this.previousElementSibling.previousElementSibling.innerText;
    document.querySelector('.modal__body').innerText = this.previousElementSibling.innerText
    
    document.querySelector('.modal-bg').classList.add('active');
    document.querySelector('.modal').classList.add('active');
  }
})

document.querySelector('.modal__close').onclick = function(){
  document.querySelector('.modal-bg').classList.remove('active');
  document.querySelector('.modal').classList.remove('active');
}

document.querySelector('.modal-bg').onclick = function(){
  document.querySelector('.modal-bg').classList.remove('active');
  document.querySelector('.modal').classList.remove('active');
}






