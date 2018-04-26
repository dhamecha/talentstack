$(document).ready(function() {

  $(window).scroll( function(e) {

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

  if($(window).innerWidth() < 768) {
    // Home Page Banner
    var homePageBannerWrapper = document.querySelector('.home-page-banner-wrapper');
    var homePageBannerWrapperSwipe = new Hammer(homePageBannerWrapper);

    var steps1Wrapper = document.querySelector('.steps1-wrapper');
    var steps1WrapperSwipe = new Hammer(steps1Wrapper);

    var steps2Wrapper = document.querySelector('.steps2-wrapper');
    var steps2WrapperSwipe = new Hammer(steps2Wrapper);

    var steps3Wrapper = document.querySelector('.steps3-wrapper');
    var steps3WrapperSwipe = new Hammer(steps3Wrapper);

    var steps4Wrapper = document.querySelector('.steps4-wrapper');
    var steps4WrapperSwipe = new Hammer(steps4Wrapper);

    var steps5Wrapper = document.querySelector('.steps5-wrapper');
    var steps5WrapperSwipe = new Hammer(steps5Wrapper);

    var clientHeading = document.querySelector('.client-heading');

    homePageBannerWrapperSwipe.get('swipe').set({
      direction: Hammer.DIRECTION_VERTICAL,
      threshold: 1,
      velocity:0.1
    });

    steps1WrapperSwipe.get('swipe').set({
      direction: Hammer.DIRECTION_VERTICAL,
      threshold: 1,
      velocity:0.1
    });

    steps2WrapperSwipe.get('swipe').set({
      direction: Hammer.DIRECTION_VERTICAL,
      threshold: 1,
      velocity:0.1
    });

    steps3WrapperSwipe.get('swipe').set({
      direction: Hammer.DIRECTION_VERTICAL,
      threshold: 1,
      velocity:0.1
    });

    steps4WrapperSwipe.get('swipe').set({
      direction: Hammer.DIRECTION_VERTICAL,
      threshold: 1,
      velocity:0.1
    });

    steps5WrapperSwipe.get('swipe').set({
      direction: Hammer.DIRECTION_VERTICAL,
      threshold: 1,
      velocity:0.1
    });

    homePageBannerWrapperSwipe.on('swipeup', function(e) {

        steps1Wrapper.scrollIntoView({
          behavior: 'smooth'
        });

        setTimeout(function() {
          document.querySelector('.step1-img').classList.add('step1-img-animate');
        }, 500);
    });

    steps1WrapperSwipe.on('swipeup swipedown', function(e) {
      if(e.type === 'swipeup') {
        steps2Wrapper.scrollIntoView({
          behavior: 'smooth'
        });

        document.querySelector('.step1-img').classList.remove('step1-img-animate');

        setTimeout(function() {
          document.querySelector('.step21-img').classList.add('step21-img-animate');
          document.querySelector('.step22-img').classList.add('step22-img-animate');
        }, 500);
      } else {
        // homePageBannerWrapper.scrollIntoView({
        //   behavior: 'smooth'
        // });

        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });

        document.querySelector('.step1-img').classList.remove('step1-img-animate');
      }
    });

    steps2WrapperSwipe.on('swipeup swipedown', function(e) {

      if(e.type === 'swipeup') {
        steps3Wrapper.scrollIntoView({
          behavior: 'smooth'
        });

        document.querySelector('.step21-img').classList.remove('step21-img-animate');
        document.querySelector('.step22-img').classList.remove('step22-img-animate');

        setTimeout(function() {
          document.querySelector('.step32-img').classList.add('step32-img-animate');
          document.querySelector('.step33-img').classList.add('step33-img-animate');
        }, 500);
      } else {
        steps1Wrapper.scrollIntoView({
          behavior: 'smooth'
        });

        document.querySelector('.step21-img').classList.remove('step21-img-animate');
        document.querySelector('.step22-img').classList.remove('step22-img-animate');

        // document.querySelector('.step32-img').classList.remove('step32-img-animate');
        // document.querySelector('.step33-img').classList.remove('step33-img-animate');

        setTimeout(function() {
          document.querySelector('.step1-img').classList.add('step1-img-animate');
        }, 500);
      }
    });

    steps3WrapperSwipe.on('swipeup swipedown', function(e) {

      if(e.type === 'swipeup') {
        steps4Wrapper.scrollIntoView({
          behavior: 'smooth'
        });

        document.querySelector('.step32-img').classList.remove('step32-img-animate');
        document.querySelector('.step33-img').classList.remove('step33-img-animate');

        setTimeout(function() {
          document.querySelector('.step41-img').classList.add('step41-img-animate');
        }, 500);
      } else {
        steps2Wrapper.scrollIntoView({
          behavior: 'smooth'
        });

        // window.scrollTo({
        //   top: 0,
        //   left: 0,
        //   behavior: 'smooth'
        // });

        document.querySelector('.step32-img').classList.remove('step32-img-animate');
        document.querySelector('.step33-img').classList.remove('step33-img-animate');

        setTimeout(function() {
          document.querySelector('.step41-img').classList.add('step41-img-animate');
        }, 500);
      }
    });

    steps4WrapperSwipe.on('swipeup swipedown', function(e) {

      if(e.type === 'swipeup') {
        steps5Wrapper.scrollIntoView({
          behavior: 'smooth'
        });

        document.querySelector('.step41-img').classList.remove('step41-img-animate');

        setTimeout(function() {
          document.querySelector('.step52-img').classList.add('step52-img-animate');
        }, 500);
      } else {
        steps2Wrapper.scrollIntoView({
          behavior: 'smooth'
        });

        // window.scrollTo({
        //   top: 0,
        //   left: 0,
        //   behavior: 'smooth'
        // });

        document.querySelector('.step52-img').classList.add('step52-img-animate');

        setTimeout(function() {
          document.querySelector('.step41-img').classList.remove('step41-img-animate');
        }, 500);
      }
    });

    steps5WrapperSwipe.on('swipeup swipedown', function(e) {

      if(e.type === 'swipeup') {
        clientHeading.scrollIntoView({
          behavior: 'smooth'
        });
      } else {
        steps4Wrapper.scrollIntoView({
          behavior: 'smooth'
        });


        document.querySelector('.step52-img').classList.remove('step52-img-animate');

        setTimeout(function() {
          document.querySelector('.step41-img').classList.add('step41-img-animate');
        }, 500);
      }
      
    });
  }
});