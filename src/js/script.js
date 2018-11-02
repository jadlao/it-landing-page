// initializes slick carousel
$(document).ready(function(){
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
  });

    
// opens mobile menu
function openMenu() {
    //console.log('click');
    var d = document.getElementById('mob-menu');
    d.classList.remove('close');
    d.className += ' open';
}

// closes mobile menu
function closeMenu() {
    //console.log('click');
    var d = document.getElementById('mob-menu');
    d.classList.remove('open');
    d.className += ' close';
}