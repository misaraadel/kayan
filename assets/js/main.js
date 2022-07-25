$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 700) {
            $(".scroll-top-button").fadeIn();
        } else {
            $(".scroll-top-button").fadeOut();
        }
    });

    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });

    $(".scroll-top-button").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });

    $('.search-icon').click(function(){
        $('.form-popup').toggleClass('active-form');
        $('body').toggleClass('overflowNone')
    });

    $('.form-overlay').click(function(){
        $('.form-popup').removeClass('active-form');
        $('body').removeClass('overflowNone')
    });

    $('.more-icon').click(function(){
        $('.side-nav').toggleClass('active-side');
        $('body').toggleClass('overflowNone')
    });

    $('.nav-overlay').click(function(){
        $('.side-nav').removeClass('active-side');
        $('body').removeClass('overflowNone')
    });

    $('.cat-btn').click(function(){
        $('.cat-popup').toggleClass('active-cat');
        $('body').toggleClass('overflowNone')
    });

    $('.cat-overlay').click(function(){
        $('.cat-popup').removeClass('active-cat');
        $('body').removeClass('overflowNone')
    });

    $('.owl-header').owlCarousel({
        rtl: true,
        loop:true,
        margin: 20,
        nav:false,
        dots: true,
        autoplay: true,
        touchDrag  :false,
		mouseDrag  : false,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 2000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        items:1
    });

    $('.owl-partner').owlCarousel({
        rtl: true,
        loop:false,
        margin: 20,
        nav:false,
        dots: true,
        autoplay: true,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 6000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:5
            }
        }
    });
});