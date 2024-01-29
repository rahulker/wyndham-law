$(function () {
  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    slidesPerView: 4,
    loop: true,
    autoplay: {
      delay: 1500,
      disableOnInteraction: false,
    },

    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1280: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
    },
  });
});
const mobil_icon = document.getElementById("mobile-button");
const mobil_menu = document.getElementById("mobile-menu");
const hamburger_icon = document.getElementById("#mobile-button i");
function openCloseMenu() {
  mobil_menu.classList.toggle("block");
  mobil_menu.classList.toggle("active");
}
function changeIcon(icon) {
  icon.classList.toggle("fa-xmark");
}
mobil_icon.addEventListener("click", openCloseMenu);
