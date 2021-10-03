var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3.3,
  spaceBetween: 30,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  navigation: {
    nextEl: ".arrow-right",
    prevEl: ".arrow-left"
  }
});