$(function () {




  $('.active-branch').each(function () {
    $(this).parent('li').addClass('active-branch');
  });

  var mobile_trigger = document.querySelector('.mobile-trigger');
  if (mobile_trigger != null) {
    mobile_trigger.onclick = function () {
      var body = document.querySelector('body');
      body.classList.add('mobile-open');
    }
  }

  var close_trigger = document.querySelector('.globalNav .popupCloseButton');
  if (close_trigger != null) {
    close_trigger.onclick = function () {
      var body = document.querySelector('body');
      body.classList.remove('mobile-open');
    }
  }



  $('.child-trigger').click(function () {
    $(this).parent().toggleClass('menu-active');
    $(this).parent().siblings().removeClass('menu-active');
    $(this).parent().siblings('.has-submenu').find('.child-trigger').removeClass('child-open');
    $(this).parent().siblings('.has-submenu').find('.submenu').slideUp(250);
    $(this).next('.submenu').slideToggle(250);
    $(this).next('.submenu').children('.has-submenu').find('.submenu').slideUp(250);
    $(this).next('.submenu').children('.has-submenu').find('.child-trigger').removeClass('child-open');
    $(this).toggleClass('child-open');
    return false;
  });

  // Fixed Header
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var scrolltop = $('.custom_header').outerHeight();

    if (scroll > scrolltop) {
      $('body').addClass('scroll');
    } else {
      $('body').removeClass('scroll');
    }
  });

  $('.custom-menu-primary .navigation-primary > ul.submenu > li:last-child > a.menu-link').wrapInner('<span class="menu-text"></div>');

  $('.custom-menu-primary .navigation-primary > ul.submenu > li:not(:first-of-type).has-submenu > a').append('<i class="icon-down-arrow"></i>');

  // Back to Top
  $('.custom_footer,.custom_footer_v3').after('<a id="back-to-top" href="#top"><i class="icon-right-arrow1"></i></a>');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $("#back-to-top").addClass('fadeIn');
      $("#back-to-top").removeClass('fadeOut');
    } else {
      $("#back-to-top").removeClass('fadeIn');
      $("#back-to-top").addClass('fadeOut');
    }
  });

  $("#back-to-top").click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });

  if ($('.banner-wrapper').length < 1 && $('.thankyou_banner').length < 1 && $('.guide_banner').length < 1 && $('.webinar_register').length < 1) {
    $('body').addClass('no-banner')
  }
  if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = Array.prototype.forEach;
  }
  var lis = document.querySelectorAll('.custom-menu-primary .navigation-primary ul li a');
  lis.forEach(function(el, index) {
    var text = el.textContent;
    el.classList.add(text.replace(/[^A-Z0-9]+/ig, "_"))
  });

  var lis2 = document.querySelectorAll('.globalNav .mobileProducts .hs-menu-wrapper > ul ul li a');
  lis2.forEach(function(el, index) {
    var text2 = el.textContent;
    el.classList.add(text2.replace(/[^A-Z0-9]+/ig, "_"))
  });



  $('.submenu.level-2 .menu-item .menu-link').wrapInner('<div class="menu-text-wrapper"><span class="menu-text"></span></div>');
  $('.globalNav .mobileProducts .hs-menu-wrapper > ul ul li a').wrapInner('<div class="menu-text-wrapper"><span class="menu-text"></span></div>');

  $('.hs-error-msgs label:empty').remove();

  var allSubmenus = $('.submenu.level-2').wrapAll();
  $('.dropdownContainer').append(allSubmenus);

  $('.submenu.level-2').each(function () {
    const index = ($(this).index() + 1);
    $(this).addClass('submenu-'+ index);
  });

});


$(function () {

  $('.triangle-container').remove();
  $('.dropdownRoot .dropdownContainer .submenu.level-2').addClass('left');

  $('.custom-menu-primary .navigation-primary > ul > li.has-submenu').hover(function(){

    var thisIndex = $(this).index();
    var ulIndex = $('.submenu.level-2').index();

    $('.submenu.level-2').removeClass('left').addClass('right');

    $('.submenu.level-2').eq(thisIndex).addClass('active');
    $('.submenu.level-2').eq(thisIndex).siblings().removeClass('active');
    $('.submenu.level-2.active').removeClass('left right');
    $('.submenu.level-2.active').prevAll().addClass('left').removeClass('right');
    $('.submenu.level-2.active').nextAll().removeClass('left').addClass('right');

    $('.dropdownRoot .dropdownContainer').height($('.submenu.level-2.active').outerHeight(true));

  },function(){

  });


  $(window).load(function(){
    if ( $( ".custom-menu-primary" ).length ) {
      $('.dropdownContainer').css('left',$('.custom-menu-primary .navigation-primary > ul > li').first().position().left);
      $('.dropdownBackground').css('left',$('.custom-menu-primary .navigation-primary > ul > li').first().position().left);
    }



  });

  $('.custom-menu-primary .navigation-primary > ul > li.has-submenu').hover(function(){
    $('.custom_header').addClass('DropdownActive');
    $('.custom_header').removeClass('noDropdownTransition');
    $('.dropdownContainer').css('left', $(this).position().left);
    $('.dropdownBackground').css('left', $(this).position().left);
    $('.dropdownArrow').css('left', $(this).position().left + 35);
  },function(){
    $('.custom_header').removeClass('DropdownActive');
    $('.custom_header').addClass('noDropdownTransition');
  });

  $('.dropdownRoot').hover(function(){
    $('.custom_header').addClass('DropdownActive');
  },function(){
    $('.custom_header').removeClass('DropdownActive');
  });


  $('.header_v2_trigger').click(function(){
    $(this).next('.header_v2_menu').slideToggle(120);
  });


});




$(function () {

  $('.blog-mobile-trigger').click(function () {
    $('body').toggleClass('blog-mobile-open');
    $('header.blog_page ul.blog_search').toggleClass('menu_news_open');
    return false;
  });

  $('.blog-child-trigger').click(function () {
    $(this).parent().toggleClass('menu-active');
    $(this).parent().siblings().removeClass('menu-active');
    $(this).parent().siblings('.has-submenu').find('.blog-child-trigger').removeClass('blog-child-open');
    $(this).parent().siblings('.has-submenu').find('.submenu').slideUp(250);
    $(this).next('.submenu').slideToggle(250);
    $(this).next('.submenu').children('.has-submenu').find('.submenu').slideUp(250);
    $(this).next('.submenu').children('.has-submenu').find('.blog-child-trigger').removeClass('blog-child-open');
    $(this).toggleClass('blog-child-open');
    return false;
  });


  $('.blog-header-menu .navigation-primary > ul.submenu').addClass('blog_search');
  $('.blog-header-menu .navigation-primary > ul.submenu').prepend('<div class="blog_close"><i class="icon-cancel"></i></div>');
  $('.blog-header-menu .navigation-primary > ul.submenu > li.menu-item:first-of-type').addClass('search_respo');
  $('.custom-google-search1').detach().prependTo('.search_respo');

  $('.blog_close i').click(function () {
    $('body').removeClass('blog-mobile-open');
    $('header.blog_page ul.blog_search').removeClass('menu_news_open');
    return false;
  });

});


$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



$(document).ready(function () {
  if ((navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) != -1) {
    $('body').addClass('opera');
  } else if (navigator.userAgent.indexOf("Chrome") != -1) {
    $('body').addClass('chrome');
  } else if (navigator.userAgent.indexOf("Safari") != -1) {
    $('body').addClass('safari');
  } else if (navigator.userAgent.indexOf("Firefox") != -1) {
    $('body').addClass('firefox');
  }
  //IF IE > 10
  else if ((navigator.userAgent.indexOf("MSIE") != -1) || (!!document.documentMode == true)) {
    $('body').addClass('IE');
  } else {
    $('body').addClass('unknown');
  }
});


