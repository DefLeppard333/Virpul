$(document).ready(function () {
   $('.icon-menu,.menu-page__burger').click(function (event) {
      $('.icon-menu,.menu__body,.top-header__logo,.menu-page__burger,.menu-page__body').toggleClass('_active');
      $('body').toggleClass('_lock');
   });
});
