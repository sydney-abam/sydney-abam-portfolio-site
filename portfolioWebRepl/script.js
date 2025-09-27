const words = ["Developer💻", "Creator", "Writer", "CS Student @ UMich〽️"];
let currentWordIndex = 0;
let currentCharIndex = 0;
let isDeleting = false;
const typedText = document.getElementById("typed-text");

function typeLoop() {
  const currentWord = words[currentWordIndex];
  const displayedText = currentWord.substring(0, currentCharIndex);
  typedText.textContent = displayedText;

  if (!isDeleting && currentCharIndex < currentWord.length) {
    currentCharIndex++;
    setTimeout(typeLoop, 100);
  } else if (isDeleting && currentCharIndex > 0) {
    currentCharIndex--;
    setTimeout(typeLoop, 50);
  } else {
    if (!isDeleting) {
      isDeleting = true;
      setTimeout(typeLoop, 1500); // pause at full word
    } else {
      isDeleting = false;
      currentWordIndex = (currentWordIndex + 1) % words.length;
      setTimeout(typeLoop, 500); // pause before typing next word
    }
  }
}

typeLoop();
