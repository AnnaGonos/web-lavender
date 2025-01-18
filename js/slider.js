var swiper = new Swiper('.swiper', {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.slider__button--next',
        prevEl: '.slider__button--prev',
    },

    autoplay: {
        delay: 3500,
    },

    simulateTouch: true,
    touchRatio: 2,
    touchAngle: 40,
    grabCursor: true,

    slideToClickedSlide: true,

    hashNavigation: {
        watchState: true,
    },

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 1,
    },

    // autoHeight: true,
    slidesPerView: 1,
});
