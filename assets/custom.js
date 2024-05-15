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