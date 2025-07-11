const imagePaths = [
  'images/cafe-1.jpeg',
];

const carousel = document.getElementById('carousel');

imagePaths.forEach((src, index) => {
  const img = document.createElement('img');
  img.src = src;
  img.alt = `Slide ${index + 1}`;
  if (index === 0) img.classList.add('active');
  carousel.appendChild(img);
});

let current = 0;
const total = imagePaths.length;

setInterval(() => {
  const images = document.querySelectorAll('#carousel img');
  images[current].classList.remove('active');
  current = (current + 1) % total;
  images[current].classList.add('active');
}, 4000);
