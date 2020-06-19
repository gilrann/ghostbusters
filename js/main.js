$(document).ready(function(){
  const mMenuBtn = $('.menu-button');
  const mMenu = $('.transform-menu');
  const mMenuClose = $('.menu-button');
  const tab = $('.tab');
  mMenuBtn.on('click', function(){
    mMenu.toggleClass('active-menu');
    $('body').toggleClass('no-scroll');
    mMenuClose.toggleClass('closemenu-button');
  })
  tab.on('click', function(){
    tab.removeClass('cast__title--active');
    $(this).toggleClass('cast__title--active');
    let activeTabContent = $(this).attr('data-target');
    $('.cast__content').removeClass('visible');
    $(activeTabContent).toggleClass('visible');
  })

  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    breakpoints: {
      992: {
        slidesPerView: 4
      },
      769: {
        slidesPerView: 3
      },
      577: {
        slidesPerView: 2
      },
      100: {
        slidesPerView: 1,
        navigation: {
          nextEl: ".button-next"
        }
      }
    }
    // end breakpoints
  })

})
