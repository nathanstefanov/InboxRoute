(function () {
  function initCarousel(carousel) {
    var slides = carousel.querySelectorAll('.testimonial-slide');
    var dots = carousel.querySelectorAll('.carousel-dot');
    var current = 0;
    var timer;

    function show(n) {
      slides[current].classList.remove('active');
      dots[current].classList.remove('active');
      current = (n + slides.length) % slides.length;
      slides[current].classList.add('active');
      dots[current].classList.add('active');
      resetTimer();
    }

    function resetTimer() {
      clearInterval(timer);
      timer = setInterval(function () { show(current + 1); }, 5000);
    }

    carousel.querySelector('.carousel-prev').addEventListener('click', function () { show(current - 1); });
    carousel.querySelector('.carousel-next').addEventListener('click', function () { show(current + 1); });

    dots.forEach(function (dot, i) {
      dot.addEventListener('click', function () { show(i); });
    });

    resetTimer();
  }

  document.querySelectorAll('.testimonial-carousel').forEach(initCarousel);
})();
