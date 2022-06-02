// ===== Increase Numbers On Scrolling =====
let num = document.querySelectorAll('.num');
let section = document.querySelector('.our-journey__stats');
let started = false; // Function Started ? No

window.onscroll = function () {
  if (window.scrollY <= section.offsetTop) {
    if (!started) {
      num.forEach(num => startCount(num));
    }
    started = true;
  }
};
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
