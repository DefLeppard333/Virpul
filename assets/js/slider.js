
// $('.main-slider__body').slick({
//    arrows: false,
//    infinite: true,
//    slidesToShow: 1,
//    slidesToScroll: 1,
//    adaptiveHeight: true
// });


// let sliders = document.querySelectorAll('_swiper');
// if (sliders) {
//    for (let index = 0; index < sliders.lenght; index++) {
//       let slider = sliders[index];
//       if (!slider.classList.contains('swiper-bild')) {
//          let slider_items = slider.children;
//          if (slider_items) {
//             for (let index = 0; index < slider_items.lenght; index++) {
//                let el = slider_items[index];
//                el.classList.add('swiper-slide');
//             }
//          }
//          let slider_content = slider.innerHTML;
//          let slider_wrapper = document.createElement('div');
//          slider_wrapper.classList.add('swiper-wrapper');
//          slider_wrapper.innerHTML = slider_content;
//          slider.innerHTML = '';
//          slider.appendChild(slider_wrapper);
//          slider.classList.add('swiper-bild');
//       }
//       if (slider.classList.contains('_gallery')) {
//          // slider.data('LightGallery').destroy(true);
//       }
//    }
//    sliders_bild_callback();
// }

// function sliders_bild_callback(params) { }
let mainslider = new Swiper('.swiper-container', {
   // effect:'fade',
   // autoplay:{
   //    delay: 3000,
   //    disableOnInteraction: false,
   // },
   // ebserver: true,

   // flipEffect: {
   //    slideShadows: false,
   // },
   // ebserverParents: true,
   // slidesPerView: 1,
   // spaceBetween: 0,
   // autoHeight: true,
   // speed: 800,
   // touchRatio: 0,
   // simulateTouch: false,
   loop: true,
   // preLoadImages: false;
   // lazy: true,
   // //Dotts
   pagination: {
      el: '.mainslider__dotts',
      clickable: true,
   },
   //Arrows
   // navigation: {
   //    nextEl: '.swiper-button-next',
   //    prevEl: '.swiper-button-prev',
   // },
   // breackpoints: {
   //    320: {
   //       slidesPerView: 1,
   //       spaceBetween: 0,
   //       autoHeight: true,
   //    },
   //    768: {
   //       slidesPerView: 2,
   //       spaceBetween: 20,
   //    },
   //    992: {
   //       slidesPerView: 3,
   //       spaceBetween: 20,
   //    },
   //    1268:{
   //       slidesPerView: 4,
   //       spaceBetween: 30,
   //    },
   // },
   // on: {
   //    lazyImageReady: function () {
   //       ibg();
   //    },
   // }
   //Srollbar
   // scrollbar:{
   //    el:'.swiper-scrollbar',
   // },
});