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

// This loop adds the <span class="black"><span> around each letter
// For letters only though: no spans are added to the cases
for (let i = 0; i < words.textContent.length; i++) {
  switch (words.innerHTML[i]) {
    case " ":
    case ".":
    case ",":
    case "?":
      //   spanChars.push(words.innerHTML[i]);
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
  //   Console log each letter one by one with their span and class name
  //   for (let i = 0; i < wordsCounted.length; i++) {
  //     console.log(wordsCounted[i]);
  //   }

  for (let i = 0; i < wordsCounted.length; i++) {
    if (Boolean(wordsCounted[i + 1])) {
      if (
        wordsCounted[i].classList.value === "red" &&
        wordsCounted[i + 1].classList.value === "counter"
      ) {
        counter += 1;
        console.log(counter);
      }
    }
  }
}

// This demo searches only for the first letter
document.addEventListener("keydown", (e) => {
  //   if (String(e.key) === spans[0].textContent.toLowerCase()) {
  if (String(e.key) === spans[0].textContent) {
    spans[0].classList.toggle("black");
    spans[0].classList.toggle("red");
  }
  //   else {
  //     console.log(false);
  //   }
  getSpans();
  // getWordsCounted();
});
getWordsCounted();
// yes

// String(words.textContent).substring(1, 4).color = "green";
// console.log(words.textContent.substring(0, 5));

// console.log((words.style.color = "black"));
// console.log(words.style.color);
// if (words.style.color == "green") {
//   console.log(true);
// } else {
//   words.style.color = "red";
// }
// console.log;

// console.log(words);
// console.log(words);
// console.log(words.innerHTML);
// console.log(words.innerHTML[0]);
// words.innerHTML[0].style.color = "red";
