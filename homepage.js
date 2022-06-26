var swiper = new Swiper(".mySwiper", {
    slidesPerView: 6,
    spaceBetween: 2,
    slidesPerGroup: 6,

    loopFillGroupWithBlank: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});