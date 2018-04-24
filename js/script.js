$(document).ready(function() {

  $(window).scroll( function(e) {
    console.log($(window).scrollTop());
    if($(window).scrollTop() < 50) {
      $('.ts-navbar').css('background', 'rgba(255, 255, 255, '+( ($(window).scrollTop() * 2)/100 )+')');
      $('.ts-logo').css('opacity', ( ($(window).scrollTop() * 2)/100 ));
      $('.ts-logo-ini').css('opacity', (1 - ( ($(window).scrollTop() * 2)/100 )) );

      if($(window).scrollTop() > 25 && ($(window).width() > 768) ) {
        $('.custom-nav-link').css('color', '#07004F');
        $('.ts-navbar').addClass('navbar-box-shadow');
      } else {
        $('.navbar-toggler.custom-navbar-toggler > .navbar-toggler-icon').css('background-image', '');
        $('.custom-nav-link').css('color', '');
        $('.ts-navbar').removeClass('navbar-box-shadow');
      }
    } else {
      $('.ts-navbar').css('background', 'rgba(255, 255, 255, 0.8)');
      $('.custom-nav-link').css('color', '#07004F');
      $('.ts-logo').css('opacity', 1);
      $('.ts-logo-ini').css('opacity', 0);
      $('.ts-navbar').addClass('navbar-box-shadow');
      $('.navbar-toggler.custom-navbar-toggler > .navbar-toggler-icon').css('background-image', "url('images/logos/ham_menu_blue.svg')");

      // Steps Animations
      let windowHeight = $(window).innerHeight(); // Viewport Height

      if($(window).innerWidth() >= 768) {
        if($(window).scrollTop() < 200) {
          $('.step1-img').css('top', '-10%').css('left', '28%').css('opacity', '0');
        }
        else if($(window).scrollTop() >= 400 && $(window).scrollTop() < 500) {
          $('.step1-img').css('top', '6%').css('left', '34%').css('opacity', '1');

          $('.step21-img').css('top', '-14px').css('left', '28%').css('opacity', '0');
          $('.step22-img').css('top', '60px').css('left', '60%').css('opacity', '0');
        }
        else if($(window).scrollTop() >= 600 && $(window).scrollTop() < 700) {
          $('.step21-img').css('top', '0').css('left', '35%').css('opacity', '1');
          $('.step22-img').css('top', '46px').css('left', '53%').css('opacity', '1');

          $('.step32-img').css('top', '60%').css('left', '17%').css('opacity', '0');
          $('.step33-img').css('top', '43%').css('left', '48%').css('opacity', '0');
        }
        else if($(window).scrollTop() >= 1000 && $(window).scrollTop() < 1100) {
          $('.step32-img').css('top', '53%').css('left', '24%').css('opacity', '1');
          $('.step33-img').css('top', '36%').css('left', '41%').css('opacity', '1');

          $('.step41-img').css('top', '-2%').css('left', '26%').css('opacity', '0');
        }
        else if($(window).scrollTop() >= 1300 && $(window).scrollTop() < 1400) {
          $('.step41-img').css('top', '3%').css('left', '31%').css('opacity', '1');

          $('.step52-img').css('top', '0%').css('left', '60%').css('opacity', '1');
        }
        else if($(window).scrollTop() >= 1600 && $(window).scrollTop() < 1700) {
          $('.step52-img').css('top', '-18%').css('left', '70%').css('opacity', '0');
        }
      }
    }
  });
});