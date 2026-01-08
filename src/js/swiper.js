import Swiper from 'swiper';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';

const swiper = new Swiper('.my-swiper', {
  modules: [Navigation, Autoplay],

  slidesPerView: 1,
  spaceBetween: 20,
  centeredSlides: true,
  loop: true,

  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: '.swiper-btn-next',
    prevEl: '.swiper-btn-prev',
  },

  breakpoints: {
    1440: {
      slidesPerView: 2,
      centeredSlides: false,
    },
  },
});
