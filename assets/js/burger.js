$(document).ready(function () {
   $('.icon-menu').click(function (event) {
      $('.icon-menu,.menu__body,.top-header__logo').toggleClass('_active');
      $('body').toggleClass('_lock');
   });
   $('.menu-page__burger').click(function (event) {
      $('.menu-page__burger,.menu-page__body,.menu-page__lines').toggleClass('_active');
      // $('body').toggleClass('_lock');
   });


});

