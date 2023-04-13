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
var swiper = new Swiper(".mySwiper", {
  direction: "vertical",
  slidesPerView: 1,
  autoplay:true,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



//slider two 
// https://swiperjs.com/ 
// ===================== -->

var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  direction: 'vertical',
  loop: true,
  speed: 1200,
  grabCursor: true,
  mousewheel: true,
  navigation:false,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  // // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  on: {
    slideChangeTransitionStart: function () {
        // Slide captions
        var swiper = this;
        setTimeout(function () {
          var currentTitle = $(swiper.slides[swiper.activeIndex]).attr("data-title");
          var currentSubtitle = $(swiper.slides[swiper.activeIndex]).attr("data-subtitle");
        }, 500);
        gsap.to($(".current-title"), 0.4, {autoAlpha: 0, y: -40, ease: Power1.easeIn});
        gsap.to($(".current-subtitle"), 0.4, {autoAlpha: 0, y: -40, delay: 0.15, ease: Power1.easeIn});
    },
    slideChangeTransitionEnd: function () {
        // Slide captions
        var swiper = this;
        var currentTitle = $(swiper.slides[swiper.activeIndex]).attr("data-title");
        var currentSubtitle = $(swiper.slides[swiper.activeIndex]).attr("data-subtitle");
        $(".slide-captions").html(function() {
          return "<h2 class='current-title'>" + currentTitle + "</h2>" + "<h3 class='current-subtitle'>" + currentSubtitle + "</h3>";
        });
        gsap.from($(".current-title"), 0.4, {autoAlpha: 0, y: 40, ease: Power1.easeOut});
        gsap.from($(".current-subtitle"), 0.4, {autoAlpha: 0, y: 40, delay: 0.15, ease: Power1.easeOut});
    }
  }
});

// Slide captions
var currentTitle = $(mySwiper.slides[mySwiper.activeIndex]).attr("data-title");
var currentSubtitle = $(mySwiper.slides[mySwiper.activeIndex]).attr("data-subtitle");
$(".slide-captions").html(function() {
return "<h2 class='current-title'>" + currentTitle + "</h2>" + "<h3 class='current-subtitle'>" + currentSubtitle + "</h3>";
});