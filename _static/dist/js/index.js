$(function() {

  // 追従ボタン

  $(window).on('scroll', function() {
    $('.fade-in').each(function() {
      var elemPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if(scroll > elemPos - windowHeight - 500) {
        $(this).addClass('scroll-in');
      }
    });
  });

  // ページ内リンク

  $('a[href^="#"]').on('click', function() {
    var speed = 1000;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop: position}, speed, 'swing');
    return false;
  });

  // クエスチョンオープン

  $('.question-wrapper').on('click', function() {
    var wrapper = $('.question-wrapper');
    var item = $('.question-wrapper__icon--item');
    
    if($(wrapper).not($(this)).find(item).hasClass('icon-open')) {
      $(wrapper).not($(this)).find(item).toggleClass('icon-open', false);
      $(item.hasClass('icon-open')).removeClass('icon-open');
    };

    $(this).next('div').slideToggle();
    $(this).find(item).toggleClass('icon-open');
    $(wrapper).not($(this)).next('div').slideUp();
  });

  // ハンバーガーメニュー開閉

  $('.hamburger').on('click', function() {
    $('.hamburger-inner, .hamburger__line').toggleClass('open');
  });

  // スライドショー

  if(window.matchMedia('(max-width: 600px)').matches) {
    $('.review-wrapper').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
      });
  };

  var timer = 0;
  var currentWidth = window.innerWidth;
	$(window).resize(function(){
        if (currentWidth == window.innerWidth) {
          return;
        }
        if (timer > 0) {
          clearTimeout(timer);
        }
        timer = setTimeout(function () {
          location.reload();
        }, 200);
	});
});