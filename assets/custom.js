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

  if (document.querySelector('.about-us--left')) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.set('.about-us--left .left-block:not(:first-child)', { autoAlpha: 0 });
    ScrollTrigger.matchMedia({
      "(min-width: 750px)": function () {
        ScrollTrigger.create({
          trigger: ".section-about-us",
          start: function () {
            const viewportWidth = window.innerWidth;
            if (viewportWidth >= 990)
              return "top 126px";
            else
              return "top 54px";
          },
          end: "bottom top",
          pin: ".about-us--left",
        });
        var leftBlocks = document.querySelectorAll('.about-us--left .left-block');
        gsap.utils.toArray(".about-us--right .right-block").forEach((block, index) => {
          ScrollTrigger.create({
            trigger: block,
            start: function () {
              const viewportWidth = window.innerWidth;
              if (viewportWidth >= 990)
                return "top 126px";
              else
                return "top 54px";
            },
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
      }
    });
  }

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

  if (shouldShowPopup()) {
    showPopup();
    document.querySelector('.newsletter .close').addEventListener('click', function (e) {
      e.preventDefault();
      document.getElementById('newsletter').classList.remove('visible');
    });
  }
});

function shouldShowPopup() {
  const lastShownDate = localStorage.getItem('popupLastShownDate');
  if (!lastShownDate) {
    return true;
  }

  const currentDate = new Date();
  const lastShown = new Date(lastShownDate);
  const oneYear = 1000 * 60 * 60 * 24 * 365; // milliseconds in one year

  return currentDate - lastShown > oneYear;
}

function showPopup() {
  document.getElementById('newsletter').classList.add('visible');
  localStorage.setItem('popupLastShownDate', new Date().toISOString());
}


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