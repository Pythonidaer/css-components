"use strict";
// Get the paragraph with the lorem ipsum
let words = document.querySelector(".words-to-type");
// Split the paragraph into individual strings array ('e', 'm', ' ', '.' etc.)
//  -- NOTE: non-letters will need to be skipped over later
let wordsSplit = words.textContent.split("");
// This array will be used to add span.black to every paragraph letter
let spanAdder = ["<span class='black'>", "<span class='counter'>", "</span>"];
// This array will store individual strings wrapped around the above span
let spanChars = [];
// Timer span
let timeInBox = document.getElementById("timer");
// 60-second timer on top of page
let timeRemaining = 60;
// will be used to count each word (red char left of counter char = 1 word)
let callCountDown;
let body = document.querySelector("body");
let container = document.querySelector(".container");
let btnContainer = document.querySelector(".btn-container");

// Trying to hack mobile to make keyboard popup for touch screen usage
function getResolution() {
  if (screen.width > 768) body.contentEditable = false;
}
getResolution();

/* ******** BUTTONS START ************* */
// Start button
const startBtn = document.querySelector(".startBtn");
startBtn.addEventListener("click", () => {
  timer();
  startBtn.disabled = true;
  btnContainer.style.display = "none";
  container.style.marginTop = "3rem";
});
// How To Play button
const infoBtn = document.querySelector(".infoBtn");
infoBtn.addEventListener("click", () => {
  alert(`WELCOME! HERE IS HOW TO PLAY:
     1. Click 'START GAME' to begin the 60-second timer
     2. Type as many words as you can (letters/numbers only)
     3. When the game ends, words typed per minute pops up
  `);
});
/* ******** BUTTONS END ************* */

/* ******** TIMERS START ************* */
// Code copied from my old homework assignment
// https://github.com/Pythonidaer/CodingQuiz/blob/main/assets/scripts/behavior.js
// countdown() decreases the time perpetually by calling the timer() - 60-1;
function countDown() {
  timeRemaining--;
  timeInBox.textContent = timeRemaining;
  timer();
}

// timer() sets timeout to call the countdown() decreaser until timeRemaining = 0
function timer() {
  callCountDown = setTimeout(countDown, 1000);
  if (timeRemaining < 1) {
    clearTimeout(callCountDown);
    // call word function that ends game;
    getWordsCounted();
    alert(`Game over! You typed an average of ${counter} words per minute.`);
  }
}
/* ******** TIMERS END ************* */

/* ******** RECONSTRUCT PARAGRAPH START ************* */
// This loop adds the <span class="black"><span> around each letter/number
for (let i = 0; i < words.textContent.length; i++) {
  switch (words.innerHTML[i]) {
    case " ":
    case ".":
    case ",":
    case "?":
    case ";":
    case "'":
    case "!":
    case "$":
      spanChars.push(spanAdder[1] + words.innerHTML[i] + spanAdder[2]);
      continue;
    default:
      spanChars.push(spanAdder[0] + words.innerHTML[i] + spanAdder[2]);
      break;
  }
}

// This recreates the paragraph, this time with individual span tags per letter
words.innerHTML = spanChars.join("");
/* ******** RECONSTRUCT PARAGRAPH END ************* */

/* ******** IDENTIFY SPAN CLASSES START ************* */
// This gets us a NodeList of span.black
let spans = document.querySelectorAll("span.black");
function getSpans() {
  spans = document.querySelectorAll("span.black");
}

let counter = 0;
let wordsCounted = document.querySelectorAll(
  "span.red, span.counter, span.black"
);
// This function should only be called once at the end of the game.
function getWordsCounted() {
  wordsCounted = document.querySelectorAll(
    "span.red, span.counter, span.black"
  );
  for (let i = 0; i < wordsCounted.length; i++) {
    if (Boolean(wordsCounted[i + 1])) {
      if (
        wordsCounted[i].classList.value === "red" &&
        wordsCounted[i + 1].classList.value === "counter"
      ) {
        counter += 1;
      }
    }
  }
  return counter;
}
/* ******** IDENTIFY SPAN CLASSES END ************* */

/* ******** KEYBOARD PRESSES COMPARE TO FIRST BLACK SPAN START ************* */
// This demo searches only for the first letter
document.addEventListener("keydown", (e) => {
  if (String(e.key) === " ") e.preventDefault();
  if (String(e.key) === spans[0].textContent) {
    spans[0].classList.toggle("black");
    spans[0].classList.toggle("red");
  }
  getSpans();
});
/* ******** KEYBOARD PRESSES COMPARE TO FIRST BLACK SPAN END ************* */
