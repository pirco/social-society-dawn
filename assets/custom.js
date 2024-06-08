document.addEventListener('DOMContentLoaded', function () {
  const mediaElements = document.querySelectorAll('[class*="__featured_collection"] .product-card-wrapper');
  mediaElements.forEach(function (element) {
    element.addEventListener('mouseenter', function () {
      var hovered = document.querySelector('.hovered');
      if (!hovered) {
        element.classList.add('hovered');
        document.querySelector('.animate-forward').beginElement();
      }
    });
    element.addEventListener('mouseleave', function () {
      document.querySelector('.animate-reverse').beginElement();
      setTimeout(function () {
        element.classList.remove('hovered');
      }, 100);
    });
  });
});

var creditsElements = document.querySelectorAll('.credits');
creditsElements.forEach(function (creditsElement) {
  creditsElement.addEventListener('click', function () {
    var firstSpan = creditsElement.querySelector('span:nth-child(1)');
    var secondSpan = creditsElement.querySelector('span:nth-child(2)');
    if (firstSpan && secondSpan) {
      firstSpan.style.display = 'none';
      secondSpan.style.display = 'inline-block';
    }
  });
});