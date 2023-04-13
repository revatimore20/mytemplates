$(document).ready(function () {

  //hero banner Slider
  var hero_slider_length = $(".banner-carousel").find('.item').length;
  //alert(hero_slider_length);		
  $(".banner-carousel").owlCarousel({
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
  //hero banner Slider
  var hero_slider_length = $(".image-thumbnail-carousel").find('.item').length;
  //alert(hero_slider_length);		
  $(".image-thumbnail-carousel").owlCarousel({
    dots: hero_slider_length > 1 ? false : false,
    nav: hero_slider_length > 1 ? false : false,
    touchDrag: hero_slider_length > 1 ? true : false,
    mouseDrag: hero_slider_length > 1 ? false : false,
    loop: hero_slider_length > 1 ? true : false,
    autoplay: hero_slider_length > 1 ? true : false,
    autoplayTimeout: hero_slider_length > 1 ? 3000 : false,
    autoplayHoverPause: hero_slider_length > 1 ? true : false,
    margin:20,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      768: {
        items: 2
      },
      1000: {
        items: 4
      }
    }
  });


$(document).ready(function() {
  var bigimage = $("#image-thumbnail-carousel");
  var thumbs = $("#thumbs");
  //var totalslides = 10;
  var syncedSecondary = true;

  bigimage
    .owlCarousel({
    items: 4,
    slideSpeed: 2000,
    nav: true,
    autoplay: true,
    dots: false,
    loop: true,
    responsiveRefreshRate: 200,
    navText: [
      '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
      '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
    ]
  })
    .on("changed.owl.carousel", syncPosition);

  thumbs
    .on("initialized.owl.carousel", function() {
    thumbs
      .find(".owl-item")
      .eq(0)
      .addClass("current");
  })
    .owlCarousel({
    items: 4,
    dots: true,
    nav: true,
    navText: [
      '<i class="fa fa-arrow-left" aria-hidden="true"></i>',
      '<i class="fa fa-arrow-right" aria-hidden="true"></i>'
    ],
    smartSpeed: 200,
    slideSpeed: 500,
    slideBy: 4,
    responsiveRefreshRate: 100
  })
    .on("changed.owl.carousel", syncPosition2);

  function syncPosition(el) {
    //if loop is set to false, then you have to uncomment the next line
    //var current = el.item.index;

    //to disable loop, comment this block
    var count = el.item.count - 1;
    var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

    if (current < 0) {
      current = count;
    }
    if (current > count) {
      current = 0;
    }
    //to this
    thumbs
      .find(".owl-item")
      .removeClass("current")
      .eq(current)
      .addClass("current");
    var onscreen = thumbs.find(".owl-item.active").length - 1;
    var start = thumbs
    .find(".owl-item.active")
    .first()
    .index();
    var end = thumbs
    .find(".owl-item.active")
    .last()
    .index();

    if (current > end) {
      thumbs.data("owl.carousel").to(current, 100, true);
    }
    if (current < start) {
      thumbs.data("owl.carousel").to(current - onscreen, 100, true);
    }
  }

  function syncPosition2(el) {
    if (syncedSecondary) {
      var number = el.item.index;
      bigimage.data("owl.carousel").to(number, 100, true);
    }
  }

  thumbs.on("click", ".owl-item", function(e) {
    e.preventDefault();
    var number = $(this).index();
    bigimage.data("owl.carousel").to(number, 300, true);
  });
});
