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

const flowerContainer = document.getElementById('flowers');

function cherryBlossom(x, y, scale, opacity, delay) {
  const g = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  g.setAttribute('transform', `translate(${x},${y}) scale(${scale})`);
  g.style.opacity = opacity;
  g.style.animation = `floatFlower ${6 + Math.random()*4}s ease-in-out infinite ${delay}s, sway ${3 + Math.random()*2}s ease-in-out infinite ${delay}s`;
  const petals = [0,72,144,216,288];
  petals.forEach(angle => {
    const p = document.createElementNS('http://www.w3.org/2000/svg','ellipse');
    p.setAttribute('cx', 0); p.setAttribute('cy', -10);
    p.setAttribute('rx', 5); p.setAttribute('ry', 9);
    p.setAttribute('transform', `rotate(${angle})`);
    p.setAttribute('fill', '#ffb7c5');
    p.setAttribute('stroke', '#ff85a1');
    p.setAttribute('stroke-width', '0.5');
    g.appendChild(p);
  });
  const center = document.createElementNS('http://www.w3.org/2000/svg','circle');
  center.setAttribute('r','4'); center.setAttribute('fill','#fff0f3');
  center.setAttribute('stroke','#ffb7c5'); center.setAttribute('stroke-width','0.5');
  g.appendChild(center);
  const stamen = document.createElementNS('http://www.w3.org/2000/svg','circle');
  stamen.setAttribute('r','2'); stamen.setAttribute('fill','#f7c5d0');
  g.appendChild(stamen);
  return g;
}

function tulip(x, y, scale, opacity, delay, color, stemColor) {
  const g = document.createElementNS('http://www.w3.org/2000/svg','g');
  g.setAttribute('transform', `translate(${x},${y}) scale(${scale})`);
  g.style.opacity = opacity;
  g.style.animation = `floatFlower ${7 + Math.random()*3}s ease-in-out infinite ${delay}s, sway ${4 + Math.random()*2}s ease-in-out infinite ${delay}s`;
  const stem = document.createElementNS('http://www.w3.org/2000/svg','line');
  stem.setAttribute('x1','0'); stem.setAttribute('y1','0');
  stem.setAttribute('x2','0'); stem.setAttribute('y2','30');
  stem.setAttribute('stroke', stemColor); stem.setAttribute('stroke-width','2.5');
  stem.setAttribute('stroke-linecap','round');
  g.appendChild(stem);
  const leaf = document.createElementNS('http://www.w3.org/2000/svg','path');
  leaf.setAttribute('d','M0 18 Q-12 10 -8 2 Q-4 12 0 18Z');
  leaf.setAttribute('fill', stemColor); leaf.setAttribute('opacity','0.8');
  g.appendChild(leaf);
  const headPaths = [
    'M0 -22 Q-10 -18 -10 -8 Q-10 2 0 0 Z',
    'M0 -22 Q10 -18 10 -8 Q10 2 0 0 Z',
    'M0 -20 Q-7 -16 -6 -4 Q-3 2 0 0 Z',
    'M0 -20 Q7 -16 6 -4 Q3 2 0 0 Z',
    'M-1 -22 Q0 -26 1 -22 Q2 -14 0 -4 Q-2 -14 -1 -22 Z'
  ];
  headPaths.forEach(d => {
    const petal = document.createElementNS('http://www.w3.org/2000/svg','path');
    petal.setAttribute('d', d);
    petal.setAttribute('fill', color);
    petal.setAttribute('stroke', color);
    petal.setAttribute('stroke-width','0.5');
    petal.setAttribute('opacity','0.85');
    g.appendChild(petal);
  });
  return g;
}

function stargazerLily(x, y, scale, opacity, delay) {
  const g = document.createElementNS('http://www.w3.org/2000/svg','g');
  g.setAttribute('transform', `translate(${x},${y}) scale(${scale})`);
  g.style.opacity = opacity;
  g.style.animation = `floatFlower ${8 + Math.random()*3}s ease-in-out infinite ${delay}s, sway ${5 + Math.random()*2}s ease-in-out infinite ${delay}s`;
  const petalAngles = [0,60,120,180,240,300];
  petalAngles.forEach(angle => {
    const petal = document.createElementNS('http://www.w3.org/2000/svg','ellipse');
    petal.setAttribute('cx',0); petal.setAttribute('cy',-14);
    petal.setAttribute('rx',6); petal.setAttribute('ry',13);
    petal.setAttribute('transform',`rotate(${angle})`);
    petal.setAttribute('fill','#e8336d');
    petal.setAttribute('stroke','#c0195a');
    petal.setAttribute('stroke-width','0.5');
    petal.setAttribute('opacity','0.85');
    g.appendChild(petal);
    const spot1 = document.createElementNS('http://www.w3.org/2000/svg','circle');
    const rad = angle * Math.PI / 180;
    spot1.setAttribute('cx', Math.sin(rad)*-9); spot1.setAttribute('cy', Math.cos(rad)*-9);
    spot1.setAttribute('r','1.5'); spot1.setAttribute('fill','#7b0025'); spot1.setAttribute('opacity','0.7');
    g.appendChild(spot1);
  });
  const center = document.createElementNS('http://www.w3.org/2000/svg','circle');
  center.setAttribute('r','5'); center.setAttribute('fill','#fff5e0');
  center.setAttribute('stroke','#f0c060'); center.setAttribute('stroke-width','0.8');
  g.appendChild(center);
  for (let i=0;i<6;i++) {
    const ang = (i/6)*Math.PI*2;
    const stamen = document.createElementNS('http://www.w3.org/2000/svg','line');
    stamen.setAttribute('x1',0); stamen.setAttribute('y1',0);
    stamen.setAttribute('x2', Math.cos(ang)*10); stamen.setAttribute('y2', Math.sin(ang)*10);
    stamen.setAttribute('stroke','#c8a800'); stamen.setAttribute('stroke-width','0.8');
    g.appendChild(stamen);
    const anther = document.createElementNS('http://www.w3.org/2000/svg','circle');
    anther.setAttribute('cx', Math.cos(ang)*10); anther.setAttribute('cy', Math.sin(ang)*10);
    anther.setAttribute('r','1.8'); anther.setAttribute('fill','#e8a000');
    g.appendChild(anther);
  }
  return g;
}

const svgNS = 'http://www.w3.org/2000/svg';
const svg = document.createElementNS(svgNS,'svg');
svg.setAttribute('xmlns', svgNS);
svg.style.cssText = 'position:fixed;inset:0;width:100%;height:100%;pointer-events:none;z-index:0;overflow:visible;';
flowerContainer.appendChild(svg);

const vw = window.innerWidth || 1200;
const vh = window.innerHeight || 900;

const blossomPositions = [
  [vw*0.04, vh*0.08], [vw*0.12, vh*0.25], [vw*0.06, vh*0.55], [vw*0.09, vh*0.78],
  [vw*0.88, vh*0.12], [vw*0.94, vh*0.35], [vw*0.91, vh*0.62], [vw*0.85, vh*0.85],
  [vw*0.22, vh*0.05], [vw*0.75, vh*0.04], [vw*0.18, vh*0.92], [vw*0.80, vh*0.90],
  [vw*0.50, vh*0.03], [vw*0.35, vh*0.95]
];
blossomPositions.forEach(([x,y], i) => {
  const sc = 0.6 + Math.random()*0.8;
  svg.appendChild(cherryBlossom(x, y, sc, 0.25 + Math.random()*0.3, i*0.4));
});

const tulipDefs = [
  ['#e85d8a','#2d6a2d'], ['#ff6b35','#3a7a20'], ['#f7c35f','#2a6030'],
  ['#c75dce','#1e5c1e'], ['#ff4d8b','#2d6a2d'], ['#f97316','#3a7a20'],
  ['#a855f7','#256325'], ['#fb923c','#2d6a2d']
];
const tulipPositions = [
  [vw*0.02, vh*0.40], [vw*0.07, vh*0.68], [vw*0.15, vh*0.82], [vw*0.90, vh*0.48],
  [vw*0.96, vh*0.72], [vw*0.82, vh*0.20], [vw*0.28, vh*0.96], [vw*0.65, vh*0.97]
];
tulipPositions.forEach(([x,y], i) => {
  const [col, stem] = tulipDefs[i % tulipDefs.length];
  const sc = 0.7 + Math.random()*0.7;
  svg.appendChild(tulip(x, y, sc, 0.3 + Math.random()*0.25, i*0.5, col, stem));
});

const lilyPositions = [
  [vw*0.16, vh*0.12], [vw*0.82, vh*0.08], [vw*0.03, vh*0.88], [vw*0.95, vh*0.88],
  [vw*0.42, vh*0.02], [vw*0.60, vh*0.96]
];
lilyPositions.forEach(([x,y], i) => {
  const sc = 0.55 + Math.random()*0.6;
  svg.appendChild(stargazerLily(x, y, sc, 0.22 + Math.random()*0.25, i*0.6));
});

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
  setTimeout(() => { pourStream.classList.add('visible'); }, 600);
  setTimeout(() => {
    liquidFill.style.opacity = '0';
    liquidFill.style.transform = 'translateY(60px)';
  }, 700);
  setTimeout(() => { messageCard.classList.add('visible'); }, 900);
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
