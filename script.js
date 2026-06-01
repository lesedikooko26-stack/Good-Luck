const starsContainer = document.getElementById('stars');
for (let i = 0; i < 120; i++) {
  const star = document.createElement('div');
  star.className = 'star';
  const size = Math.random() * 2.5 + 0.5;
  star.style.cssText = `
    width: ${size}px;
    height: ${size}px;
    top: ${Math.random() * 100}%;
    left: ${Math.random() * 100}%;
    --dur: ${2 + Math.random() * 4}s;
    --delay: ${Math.random() * 5}s;
    --op: ${0.4 + Math.random() * 0.6};
  `;
  starsContainer.appendChild(star);
}

const beakerWrap  = document.getElementById('beakerWrap');
const pourStream  = document.getElementById('pourStream');
const messageCard = document.getElementById('messageCard');
const resetBtn    = document.getElementById('resetBtn');
const liquidFill  = document.getElementById('liquidFill');

let poured = false;

beakerWrap.addEventListener('click', () => {
  if (poured) return;
  poured = true;

  beakerWrap.classList.add('pouring');

  setTimeout(() => {
    pourStream.classList.add('visible');
  }, 600);

  setTimeout(() => {
    liquidFill.style.opacity = '0';
    liquidFill.style.transform = 'translateY(60px)';
  }, 700);

  setTimeout(() => {
    messageCard.classList.add('visible');
  }, 900);
});

resetBtn.addEventListener('click', () => {
  poured = false;
  beakerWrap.classList.remove('pouring');
  pourStream.classList.remove('visible');
  messageCard.classList.remove('visible');

  liquidFill.style.transition = 'none';
  liquidFill.style.opacity = '0.75';
  liquidFill.style.transform = 'translateY(0)';

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      liquidFill.style.transition = 'all 0.4s ease';
    });
  });
});
