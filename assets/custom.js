document.addEventListener('DOMContentLoaded', function () {

  const listItems = document.querySelectorAll('.mega-menu__list > li:not(:first-child)');
  const firstChild = document.querySelector('.mega-menu__list > li:first-child');
  listItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
      firstChild.classList.remove('hover-active');
    });

    item.addEventListener('mouseleave', () => {
      firstChild.classList.add('hover-active');
    });
  });

  const mediaElements = document.querySelectorAll('.product-card-wrapper');
  mediaElements.forEach(function (element) {
    element.addEventListener('mouseenter', function () {
      element.classList.add('hovered');
      document.querySelector('#clip-balloon-animation path animate').beginElement();
    });
    element.addEventListener('mouseleave', function () {
      element.classList.remove('hovered');
    });
  });
});