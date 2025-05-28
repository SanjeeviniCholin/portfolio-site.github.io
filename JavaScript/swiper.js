const swiper = new Swiper('.js-testimonials-slider', {
    grabCursor: true,
    spaceBetween:30,
    loop: true,
    pagination:{
    el: '.js-testimonials-pagination',
    clickable: true
},
breakpoints:{
    767:{
        slidesPerView: 3
    }
}
});