const slider = document.querySelector('.slides');
const boxes = document.querySelectorAll('.slides .slide');
const indicators = document.querySelectorAll('#carousel-indicators li button');

const boxesLength = boxes.length;
slider.style.width = boxesLength * 100 + '%';

indicators.forEach((indicator, i) => {
  indicator.addEventListener('click', () => {
    const activeIndicator = document.querySelector(
      '#carousel-indicators li button.active'
    );

    activeIndicator.setAttribute('aria-current', false);
    activeIndicator.classList.remove('active');

    indicator.setAttribute('aria-current', true);
    indicator.classList.add('active');

    slider.style.transform = 'translateX(' + i * (-(1 / boxesLength) * 100) + '%)';
    // console.log(i);
  });
});
