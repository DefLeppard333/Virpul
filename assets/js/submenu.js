let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent);
if (isMobile) {
   let menuParents = document.querySelectorAll('.menu-page__parent>a');
   for (let index = 0; index < menuParents.length; index++) {
      const menuParent = menuParents[index];
      menuParent.addEventListener("click", function (e) {
         menuParent.parentElement.classList.toggle('_active');
         e.preventDefault();

      });
   }


} else {
   let menuParents = document.querySelectorAll('.menu-page__parent');

   for (let index = 0; index < menuParents.length; index++) {
      const menuParent = menuParents[index];
      menuParent.addEventListener("mouseenter", function (e) {
         menuParent.classList.add('_active');
      });
      menuParent.addEventListener("mouseleave", function (e) {
         menuParent.classList.remove('_active');
      });
   }
}
let menuPageBurger = document.querySelector('.menu-page__burger');
let menuPageBody = document.querySelector('.menu-page__body');

menuPageBurger.addEventListener("click", function (e) {
   menuPageBurger.classList.toggle('_active');
   menuPageBody.classList.toggle('_active');
});