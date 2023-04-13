$(document).ready(function () {

  //hero banner Slider
  var hero_slider_length = $(".hero_slider_carousel").find('.item').length;
  //alert(hero_slider_length);		
  $(".hero_slider_carousel").owlCarousel({
    dots: hero_slider_length > 1 ? true : false,
    nav: hero_slider_length > 1 ? false : false,
    touchDrag: hero_slider_length > 1 ? true : false,
    mouseDrag: hero_slider_length > 1 ? true : false,
    loop: hero_slider_length > 1 ? true : false,
    autoplay: hero_slider_length > 1 ? true : false,
    autoplayTimeout: hero_slider_length > 1 ? 3000 : false,
    autoplayHoverPause: hero_slider_length > 1 ? true : false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });
	
  /* ------------- SCROLL UP FUNCTION HOME Pages ---------------*/
  $(window).scroll(function () {
    if ($(this).scrollTop() !== 0) {
      $('.scroll-up').fadeIn(700); 
    } else {
      $('.scroll-up').fadeOut(700); 
    }
  });

  $('.scroll-up').click(function () {
    $('body,html').animate({scrollTop: 0}, 700);
    $('.infy-logo').focus(); 
  });

  /* ------------- Country Selection Part ---------------*/
  $(document).on("click", ".select-country, .option-country > ul > li", function () {
    $(".option-country").toggleClass("open-country");
    if ($(".option-country").hasClass("open-country")) {
      $(".down-arrow").addClass("up-arrow").removeClass("down-arrow");
    } else {
      $(".up-arrow").addClass("down-arrow").removeClass("up-arrow");
    }
  });
  $(document).on('click', 'body', function (e) {
    if (!$(e.target).is('.select-country > a')) {
      $('.option-country.open-country').removeClass('open-country');
      $(".up-arrow").addClass("down-arrow").removeClass("up-arrow");
    }
  });

  $("#onetrust-policy-text a").attr("title", "More on cookie policy");
  $("#onetrust-accept-btn-handler, #onetrust-pc-btn-handler").attr("aria-pressed", "false");
  $("#onetrust-accept-btn-handler").css("background-color", "#015D93");
  $("#onetrust-policy-text").css({"color": "#000000", "font-size": "20px"}); 
  $("#onetrust-pc-btn-handler").css({"border": "1px solid #015D93", "background-color": "#0b321e", "color": "#ffffff"}); 

  // End
});
$('.slide-nav').on('click', function(e) {
  e.preventDefault();
  // get current slide
  var current = $('.flex--active').data('slide'),
    // get button data-slide
    next = $(this).data('slide');

  $('.slide-nav').removeClass('active');
  $(this).addClass('active');

  if (current === next) {
    return false;
  } else {
    $('.slider__warpper').find('.flex__container[data-slide=' + next + ']').addClass('flex--preStart');
    $('.flex--active').addClass('animate--end');
    setTimeout(function() {
      $('.flex--preStart').removeClass('animate--start flex--preStart').addClass('flex--active');
      $('.animate--end').addClass('animate--start').removeClass('animate--end flex--active');
    }, 800);
  }
});
var hero_slider_length = $(".animated-slider-carousel").find('.item').length;
  //alert(hero_slider_length);		
  $(".animated-slider-carousel").owlCarousel({
    dots: hero_slider_length > 1 ? true : false,
    nav: hero_slider_length > 1 ? false : false,
    touchDrag: hero_slider_length > 1 ? true : false,
    mouseDrag: hero_slider_length > 1 ? true : false,
    loop: hero_slider_length > 1 ? true : false,
    autoplay: hero_slider_length > 1 ? true : false,
    autoplayTimeout: hero_slider_length > 1 ? 3000 : false,
    autoplayHoverPause: hero_slider_length > 1 ? true : false,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      768: {
        items: 1
      },
      1000: {
        items: 1
      }
    }
  });