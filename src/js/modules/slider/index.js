import Swiper from 'swiper/js/swiper.min';

// eslint-disable-next-line no-new
new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true
  },
  loop: true,

  speed: 800,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false
  }
});
