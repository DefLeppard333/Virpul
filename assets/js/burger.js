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

let menuParents = document.querySelectorAll('.burger__plus');


for (let index = 0; index < menuParents.lenght; index++) {
    const menuParent = menuParents[index];
    menuParent.addEventListener("mouseenter", function (e) {
        menuParent.classList.add('_active');
    });
}
