// Creating extra glowing stars
const starLayer = document.querySelector('.stars');
for (let i = 0; i < 100; i++) {
  const star = document.createElement('div');
  star.style.position = 'absolute';
  star.style.width = '2px';
  star.style.height = '2px';
  star.style.background = 'white';
  star.style.left = Math.random() * 100 + '%';
  star.style.top = Math.random() * 100 + '%';
  star.style.opacity = Math.random();
  starLayer.appendChild(star);
}



