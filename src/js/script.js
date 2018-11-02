$(document).ready(function(){
    // initializes slick carousel
    $('.hero-carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false
      });

    // hamburger transformation
    var $hamburger = $(".hamburger");
    var $menu = $('.mob-menu');
    $hamburger.on("click", function(e) {
        $hamburger.toggleClass("is-active");
        $menu.toggleClass("is-closed");
    });
  });