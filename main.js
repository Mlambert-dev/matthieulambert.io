const wordCloud = document.querySelector('.word-cloud');
const words = document.querySelectorAll('.word');

// Dimensions de l'écran
const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

// Zone de la photo à éviter (centre de l'écran)
const photoZone = {
  x: screenWidth / 2 - 150, // 150px de chaque côté de la photo
  y: screenHeight / 2 - 150,
  width: 300,
  height: 300
};

function isInPhotoZone(x, y) {
  return x > photoZone.x && x < photoZone.x + photoZone.width &&
         y > photoZone.y && y < photoZone.y + photoZone.height;
}

words.forEach((word, i) => {
  let left, top;
  
  // Trouve une position qui n'est pas dans la zone de la photo
  do {
    left = Math.random() * (screenWidth - 50);
    top = Math.random() * (screenHeight - 50);
  } while (isInPhotoZone(left, top));

  word.style.left = `${left}px`;
  word.style.top = `${top}px`;
  word.style.fontSize = `${0.9 + Math.random() * 1.2}rem`;
  word.style.animationDelay = `${i * 0.1}s`;
});

// Repositionne les mots lors du redimensionnement
window.addEventListener('resize', () => {
  const newScreenWidth = window.innerWidth;
  const newScreenHeight = window.innerHeight;
  
  words.forEach((word, i) => {
    let left, top;
    
    do {
      left = Math.random() * (newScreenWidth - 200);
      top = Math.random() * (newScreenHeight - 100);
    } while (isInPhotoZone(left, top));
    
    word.style.left = `${left}px`;
    word.style.top = `${top}px`;
  });
});

