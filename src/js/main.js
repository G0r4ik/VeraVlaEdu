import { swiper } from './swiper.js';

const swiper1 = new Swiper('.announcements__slider', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1000: {
      slidesPerView: 3.1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    460: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});

const swiper2 = new Swiper('.vacancy-swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1000: {
      slidesPerView: 3.1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    650: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    460: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
  },
});

//

const headerCross = document.querySelector('.div-number__cross');
const headerPhoneIcon = document.querySelector('.div-number__icon_mobile');
const headerDivNumber = document.querySelector('.header__div-number');

headerCross.addEventListener('click', () => {
  headerDivNumber.classList.remove('header__div-number_visible');
});

headerCross.addEventListener('keydown', (e) => {
  if (e.keyCode == 13) {
    headerDivNumber.classList.remove('header__div-number_visible');
  }
});

headerPhoneIcon.addEventListener('click', () => {
  headerDivNumber.classList.add('header__div-number_visible');
});
headerPhoneIcon.addEventListener('keydown', (e) => {
  console.log(e);
  if (e.keyCode == 13) {
    headerDivNumber.classList.add('header__div-number_visible');
  }
});

// Hide Popup

const hiddenPopupButton = document.querySelector('.popup-consultation__cross');
const popupConsultation = document.querySelector('.popup-consultation');
const consultationContent = document.querySelector(
  '.popup-consultation__content'
);

consultationContent.addEventListener('click', (e) => e.stopPropagation());

popupConsultation.addEventListener('click', () => {
  popupConsultation.classList.remove('popup-consultation_visible');
  setTimeout(() => {
    popupConsultation.classList.add('popup-consultation_display-none');
  }, 500);
});

function hidePopup(e) {
  if (!e) {
    popupConsultation.classList.remove('popup-consultation_visible');
  } else if (e.keyCode == 13) {
    popupConsultation.classList.remove('popup-consultation_visible');
  }
  setTimeout(() => {
    popupConsultation.classList.add('popup-consultation_display-none');
  }, 500);
}

hiddenPopupButton.addEventListener('click', () => hidePopup());
hiddenPopupButton.addEventListener('keydown', (e) => hidePopup(e));

// Show Popup

const buttonRegister = document.querySelectorAll('.button-register');
const introConsultation = document.querySelector(
  '.intro__consultation-img-wrapper-wrapper'
);

function showPopup(e) {
  popupConsultation.classList.remove('popup-consultation_display-none');
  setTimeout(() => {
    if (!e) {
      popupConsultation.classList.add('popup-consultation_visible');
    } else if (e.keyCode == 13) {
      popupConsultation.classList.add('popup-consultation_visible');
    }

    window.addEventListener('keydown', (e) => {
      if (e.keyCode == 27) {
        popupConsultation.classList.remove('popup-consultation_visible');
        setTimeout(() => {
          popupConsultation.classList.add('popup-consultation_display-none');
        }, 500);
      }
    });
  }, 100);
}

introConsultation.addEventListener('click', () => showPopup());
introConsultation.addEventListener('keydown', (e) => showPopup(e));

buttonRegister.forEach((el) => {
  el.addEventListener('click', () => showPopup());
  el.addEventListener('keydown', (e) => showPopup(e));
});

// Footer

const goToTop = document.querySelector('.go-top-img-wrapper-wrapper');
goToTop.addEventListener('click', () => {
  document.querySelector('.intro').scrollIntoView({
    behavior: 'smooth',
  });
});
