$(document).ready(() => {

  $(window).scroll( (e) => {
    if($(window).scrollTop() < 50) {
      $('.ts-navbar').css('background', 'rgba(255, 255, 255, '+( ($(window).scrollTop() * 2)/100 )+')');
      $('.ts-logo').css('opacity', ( ($(window).scrollTop() * 2)/100 ));
      $('.ts-logo-ini').css('opacity', (1 - ( ($(window).scrollTop() * 2)/100 )) );

      if($(window).scrollTop() > 25 && ($(window).width() > 425) ) {
        $('.custom-nav-link').css('color', '#07004F');
      } else {
        $('.custom-nav-link').css('color', '');
      }
    } else {
      $('.ts-navbar').css('background', 'rgba(255, 255, 255, 1)');
      $('.ts-logo').css('opacity', 1);
      $('.ts-logo-ini').css('opacity', 0);
    }
  });
});