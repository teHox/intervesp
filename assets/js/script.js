// const servicesButton = document.querySelector(".services__button");
// const servicesWrapper = document.querySelector(".services__wrapper");
// const servicesText = document.querySelector("#services__text");
// const servicesLogo = document.querySelector(".services__logo");

// servicesButton.addEventListener("click", () => {
//   servicesWrapper.classList.toggle("services__wrapper_active");
//   servicesText.classList.toggle("services__text_active");
//   servicesLogo.classList.toggle("services__logo_active");
// });

window.addEventListener("load", () => {
  const headerOpen = document.querySelector("#open");
  const headerOpen2 = document.querySelector("#open2");
  const headerMore = document.querySelector(".header__more");

  headerOpen.addEventListener("click", () => {
    headerMore.classList.toggle("header__more_active");
  });

  headerOpen2.addEventListener("click", () => {
    headerMore.classList.toggle("header__more_active");
  });

  const OurPartnersLeft = document.querySelector(".our-partners__left");
  const OurPartnersRight = document.querySelector(".our-partners__right");

  new Swiper(".our-partners__slider", {
    spaceBetween: 80,
    slidesPerView: 6,
    navigation: {
      nextEl: OurPartnersRight,
      prevEl: OurPartnersLeft,
    },
  });

  const MainNewsLeft = document.querySelector(".main-news__left");
  const MainNewsRight = document.querySelector(".main-news__right");

  new Swiper(".main-news__slider", {
    spaceBetween: 40,
    slidesPerView: 2,
    navigation: {
      nextEl: MainNewsRight,
      prevEl: MainNewsLeft,
    },
  });

  const popUpRefLeft = document.querySelector(".popup-slider__prev");
  const popUpRefRight = document.querySelector(".popup-slider__next");

  var popupThumbs = new Swiper(".popup-thumbs", {
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
  });

  new Swiper(".popup-slider", {
    slidesPerView: 1,
    navigation: {
      nextEl: popUpRefRight,
      prevEl: popUpRefLeft,
    },
    thumbs: {
      swiper: popupThumbs,
    },
  });

  const designingLeft = document.querySelector(".designing-slider__prev");
  const designingRight = document.querySelector(".designing-slider__next");

  new Swiper(".designing-slider", {
    slidesPerView: 1,
    navigation: {
      nextEl: designingRight,
      prevEl: designingLeft,
    },
  });

  // Тут почему то forEach не пашит

  const servicesItem = document.querySelectorAll(".services__item");

  servicesItem.forEach((e) => {
    const servicesButton = e.querySelector(".services__button");
    const servicesWrapper = e.querySelector(".services__wrapper");
    const servicesText = e.querySelector("#services__text");
    const servicesLogo = e.querySelector(".services__logo");

    servicesButton.addEventListener("click", () => {
      servicesWrapper.classList.toggle("services__wrapper_active");
      servicesText.classList.toggle("services__text_active");
      servicesLogo.classList.toggle("services__logo_active");
    });
  });
});
