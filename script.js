(async () => {
  const response = await fetch('images.json');
  const imagePaths = await response.json();

  const carousel = document.getElementById('carousel');

  imagePaths.forEach((src, index) => {
    const img = document.createElement('img');
    img.alt = `Slide ${index + 1}`;

    if (index === 0) {
      img.src = src; 
      img.classList.add('active');
    } else {
      img.dataset.src = src; 
    }

    carousel.appendChild(img);
  });

  let current = 0;
  const total = imagePaths.length;

  setInterval(() => {
    const images = document.querySelectorAll('#carousel img');

    images[current].classList.remove('active');

    current = (current + 1) % total;

    const nextImage = images[current];
    if (!nextImage.src) {
      nextImage.src = nextImage.dataset.src;
    }

    nextImage.classList.add('active');
  }, 4000);
})();
