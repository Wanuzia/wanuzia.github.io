const hasText = true;
const words = ["HTML ", "CSS ", "JavaScript ", "React ", "NodeJs "];
let interval;

let currentWordIndex = 0;
let currentLetterIndex = 0;
let lettersArray = words[currentWordIndex].split("");

function renderLetters() {
  const animatedText = document.getElementById("animated-text");
  if (!animatedText) return; 
  
  let letterHtml = "";
  lettersArray.forEach((letter, index) => {
    let classes = "letter";
    if (index === currentLetterIndex) {
      classes += " current";
      if (index === 0) classes += " active";
    } else if (index <= currentLetterIndex) {
      classes += " active";
    }
    letterHtml += `<span class="${classes}">${letter}</span>`;
  });
  
  animatedText.innerHTML = letterHtml;
  
  currentLetterIndex++;
  if (currentLetterIndex > lettersArray.length -1) {
    currentLetterIndex = 0;
    currentWordIndex++;
    if (currentWordIndex >= words.length) {
      currentWordIndex = 0;
    } 
      lettersArray = words[currentWordIndex].split("");
  }
}

if (hasText) {
  document.addEventListener("DOMContentLoaded", function(event) {
    interval = setInterval(renderLetters, 200);
  });
}