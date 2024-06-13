document.addEventListener('DOMContentLoaded', function () {
  const mediaElements = document.querySelectorAll('[class*="__featured_collection"] .product-card-wrapper');
  mediaElements.forEach(function (element) {
    element.addEventListener('mouseenter', function () {
      document.querySelector(element.getAttribute('data-clip') + ' .animate-forward').beginElement();
    });
    element.addEventListener('mouseleave', function () {
      document.querySelector(element.getAttribute('data-clip') + ' .animate-reverse').beginElement();
    });
  });

  gsap.registerPlugin(ScrollTrigger);
  gsap.set('.about-us--left .block:not(:first-child)', { autoAlpha: 0 });
  ScrollTrigger.create({
    trigger: ".section-about-us",
    start: "top 126px",
    end: "bottom top",
    pin: ".about-us--left",
  });
  var leftBlocks = document.querySelectorAll('.about-us--left .block');
  gsap.utils.toArray(".about-us--right .block").forEach((block, index) => {
    ScrollTrigger.create({
      trigger: block,
      start: "top 126px",
      end: "bottom 0px",
      pin: block.querySelector('.block-inner'),
      onEnter: () => {
        if (index != 0)
          gsap.fromTo(leftBlocks[index], { autoAlpha: 0 }, { duration: 0.3, autoAlpha: 1 });
      },
      onEnterBack: () => {
        gsap.fromTo(leftBlocks[index], { autoAlpha: 0 }, { duration: 0.3, autoAlpha: 1 });
      },
      onLeave: () => {
        if (index != 0)
          gsap.fromTo(leftBlocks[index], { autoAlpha: 1 }, { duration: 0.3, autoAlpha: 0 });
      },
      onLeaveBack: () => {
        if (index != 0)
          gsap.fromTo(leftBlocks[index], { autoAlpha: 1 }, { duration: 0.3, autoAlpha: 0 });
      }
    });
  });

  const sectionHeader = document.querySelector('.section-header');
  let previousClassList = sectionHeader.className;
  // Set up the MutationObserver
  const observer = new MutationObserver(
    function (mutationsList) {
      for (let mutation of mutationsList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const currentClassList = sectionHeader.className;
          if (previousClassList !== currentClassList) {
            if (ScrollTrigger) {
              setTimeout(function () {
                ScrollTrigger.refresh();
              }, 400);
            }
            previousClassList = currentClassList; // Update the previous class list
          }
        }
      }
    });
  observer.observe(sectionHeader, { attributes: true, attributeFilter: ['class'] });
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