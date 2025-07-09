
$(document).ready(function () {

  // Open nav
  $('.q-navbar-toggle').on('click', function() {
    $('.q-nav').slideToggle(200);
    $(this).toggleClass('q-active');
  });

  // Solutions
  $('.q-solutions__dn').hide();
  $('.q-solutions__more .q-btn').on('click', function(e) {
    e.preventDefault();
    $('.q-solutions__dn').toggle(200);
    if ($(this).text() == 'Показать еще') {
      $(this).text('Показать меньше')
    }
    else {
      $(this).text('Показать еще');
    }

    const sWrap = $('.q-solutions__wrap');
    sWrap.toggleClass('q-solutions__wrap--fix');

    if (sWrap.hasClass('q-solutions__wrap--fix')) {
      $('.inner-wrapper-sticky').removeClass('inner-wrapper-sticky-stop');
      $('.q-solutions__wrap--fix').stickySidebar({
        topSpacing: 60,
        bottomSpacing: 30,
        containerSelector: '.q-solutions__inner'
      });
    } else {
      $('.inner-wrapper-sticky').addClass('inner-wrapper-sticky-stop');
    }
  });

  // Hero sl
  var swiper = new Swiper(".q-hero__sl", {
    loop: true,
    autoplay: {
      delay: 555000,
      disableOnInteraction: false
    },
    spaceBetween: 0,
    slidesPerView: 1,
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    pagination: {
      el: ".swiper-pagination-hero",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      // 768: {
        
      // },
    },
  });

  // Tasks
  var swiper2 = new Swiper(".q-tasks__nav", {
    spaceBetween: 0,
    onlyExternal: true,
    allowTouchMove: false,
    slidesPerView: 'auto',
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    freeMode: true,
    watchSlidesProgress: true,
    direction: 'vertical',
    watchOverflow: true,
    watchSlidesVisibility: true,
  });

  var swiper3 = new Swiper(".q-tasks__body", {
    loop: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false
    },
    spaceBetween: 24,
    slidesPerView: 1,
    observer: true,
    observeSlideChildren: true,
    observeParents: true,
    pagination: {
      el: ".swiper-pagination-tasks",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper2,
    },
    breakpoints: {
      992: {
        onlyExternal: true,
        allowTouchMove: false,
      },
    },
  });

});