$(document).ready(function () {
   $('.icon-menu').click(function (event) {
      $('.icon-menu,.menu__body,.top-header__logo').toggleClass('_active');
      $('body').toggleClass('_lock');
   });
});
