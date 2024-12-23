$(document).ready(function() {
    $('.review__carousel').slick({
        infinite: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false
    });

    new WOW().init();
});