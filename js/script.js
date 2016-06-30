'use strict';

$(function() {

    $('.logo').on('inview', function(event, isInView) {
        if (isInView) {
            $(this).addClass('animated fadeIn');
        }
    });

    $('.language').on('inview', function(event, isInView) {
        if (isInView) {
            $(this).addClass('animated fadeIn');
        }
    });

    $('.main-menu').on('inview', function(event, isInView) {
        if (isInView) {
            $(this).addClass('animated fadeIn');
        }
    });


    $('.tagline-wrap').on('inview', function(event, isInView) {
        if (isInView) {
            $(this).addClass('animated zoomInDown');
        }
    });

    $('.work-item-left-up').on('inview', function(event, isInView) {
        if (isInView) {
            $(this).addClass('animated zoomInLeft');
        }
    });

    $('.work-item-right-up').on('inview', function(event, isInView) {
        if (isInView) {
            $(this).addClass('animated zoomInRight');
        }
    });

    $('.work-item-left-down').on('inview', function(event, isInView) {
        if (isInView) {
            $(this).addClass('animated zoomInLeft');
        }
    });

    $('.work-item-right-down').on('inview', function(event, isInView) {
        if (isInView) {
            $(this).addClass('animated zoomInRight');
        }
    });

    $('.all-case').on('inview', function(event, isInView) {
        if (isInView) {
            $(this).addClass('animated zoomInLeft');
        }
    });

    $('.partners-title').on('inview', function(event, isInView) {
        if (isInView) {
            $(this).addClass('animated zoomInDown');
        }
    });

    $('.brands').on('inview', function(event, isInView) {
        if (isInView) {
            $(this).addClass('animated slideInUp');
        }
    });

    $('.plan-title').on('inview', function(event, isInView) {
        if (isInView) {
            $(this).addClass('animated zoomInUp');
        }
    });

    $('.plan-item').on('inview', function(event, isInView) {
        if (isInView) {
            $(this).addClass('animated fadeInUp');
        }
    });

    $('.footer-logo').on('inview', function(event, isInView) {
        if (isInView) {
            $(this).addClass('animated fadeInUp');
        }
    });

    $('.nav-down').on('inview', function(event, isInView) {
        if (isInView) {
            $(this).addClass('animated fadeInUp');
        }
    });

    $('.copyright').on('inview', function(event, isInView) {
        if (isInView) {
            $(this).addClass('animated fadeInUp');
        }
    });

    $('.social').on('inview', function(event, isInView) {
        if (isInView) {
            $(this).addClass('animated fadeInUp');
        }
    });
});

$(function() {
  $('.burger').on('click', function(e) {
    e.preventDefault();
    $(this).toggleClass('open');
    var menu = $('.main-menu');

    if ($('.burger').hasClass('active')) {
      menu.slideUp('fast');
      $(this).removeClass('active');
    } else {
      menu.slideDown('fast');
      $(this).addClass('active');
    }
  })
});



