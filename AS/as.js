var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3.5,
  spaceBetween: 100,
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