// Floating Hearts Animation
function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 2 + 3 + 's';
  heart.style.opacity = Math.random() * 0.5 + 0.3;
  document.getElementById('hearts-container')?.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);

// No Button Logic
const noBtn = document.getElementById('no-btn');
const yesBtn = document.querySelector('.btn-yes');

if (noBtn) {
  const moveButton = () => {
    // Get viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Get button dimensions
    const btnRect = noBtn.getBoundingClientRect();
    const btnWidth = btnRect.width;
    const btnHeight = btnRect.height;

    // Fix: Move button to body if it's not already there
    // This prevents issues where 'position: fixed' behaves relative to a transformed parent (.container)
    if (noBtn.parentNode !== document.body) {
      document.body.appendChild(noBtn);
    }

    // Calculate safe area (padding from edges)
    const padding = 20;

    // Calculate maximum allowable X and Y
    const maxX = viewportWidth - btnWidth - padding;
    const maxY = viewportHeight - btnHeight - padding;
    
    // Ensure we don't have negative ranges
    const safeMaxX = Math.max(padding, maxX);
    const safeMaxY = Math.max(padding, maxY);

    // Calculate random position within safe bounds
    const randomX = Math.random() * (safeMaxX - padding) + padding;
    const randomY = Math.random() * (safeMaxY - padding) + padding;

    // Apply new position
    noBtn.style.position = 'fixed'; 
    noBtn.style.left = randomX + 'px';
    noBtn.style.top = randomY + 'px';
    noBtn.style.zIndex = '1000'; 
  };

  noBtn.addEventListener('mouseover', moveButton);
  noBtn.addEventListener('click', (e) => {
    e.preventDefault(); // Prevent any default action
    moveButton();
  });
  noBtn.addEventListener('touchstart', (e) => {
     e.preventDefault(); // Better mobile handling
     moveButton();
  });
}
