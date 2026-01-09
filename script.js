(function () {
  const carousels = document.querySelectorAll('.product-image.carousel');

  carousels.forEach((carousel) => {
    const track = carousel.querySelector('.carousel-track');
    const slides = track.querySelectorAll('img');
    const prevBtn = carousel.querySelector('.carousel-btn.prev');
    const nextBtn = carousel.querySelector('.carousel-btn.next');

    let index = 0;

    function update() {
      track.style.transform = `translateX(-${index * 100}%)`;

      // deshabilitar en extremos
      prevBtn.disabled = index === 0;
      nextBtn.disabled = index === slides.length - 1;

      prevBtn.style.opacity = prevBtn.disabled ? 0.35 : '';
      nextBtn.style.opacity = nextBtn.disabled ? 0.35 : '';
      prevBtn.style.cursor = prevBtn.disabled ? 'default' : 'pointer';
      nextBtn.style.cursor = nextBtn.disabled ? 'default' : 'pointer';
    }

    prevBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (index > 0) index--;
      update();
    });

    nextBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (index < slides.length - 1) index++;
      update();
    });

    update();
  });
})();
