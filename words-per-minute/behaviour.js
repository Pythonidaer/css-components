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
let timeRemaining = 60;
let callCountDown;

// Start button
const startBtn = document.querySelector(".startBtn");
startBtn.addEventListener("click", () => {
  console.log("Clicked");
  timer();
});

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

// This loop adds the <span class="black"><span> around each letter
// For letters only though: no spans are added to the cases
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
  // spanChars.push(spanAdder[0] + words.innerHTML[i] + spanAdder[2]);
}

// This recreates the paragraph, this time with individual span tags per letter
words.innerHTML = spanChars.join("");

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

// This demo searches only for the first letter
document.addEventListener("keydown", (e) => {
  //   if (String(e.key) === spans[0].textContent.toLowerCase()) {
  if (String(e.key) === spans[0].textContent) {
    spans[0].classList.toggle("black");
    spans[0].classList.toggle("red");
  }
  getSpans();
});

/*
What do I want to do next? 
I want a user button to start the game


*/
