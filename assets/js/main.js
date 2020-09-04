$(document).ready(function () {
    // Window Scroll
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 80) {
            $('.header-area').addClass('header-fixed');
        } 
        else {
            $('.header-area').removeClass('header-fixed');
        }
    });

    // Owl-Carousel Slider
    $('.owl-carousel').owlCarousel(
        {
            lazyLoad:true,
            items:1,
            autoplay: true,
            smartSpeed: 1000,
            nav:true,
            dots: true,
            loop : true,
          }
        );
    
    // Wow JS
    $(windows).on()    
});





