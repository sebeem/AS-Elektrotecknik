var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3.2,
  spaceBetween: 20,
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