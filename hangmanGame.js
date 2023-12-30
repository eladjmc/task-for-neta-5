// Hangman game variables
const wordsArray = ["example", "javascript", "hangman", "coding"];
const possibleLetters = "abcdefghijklmnopqrstuvwxyz".split("");
let selectedWord = "";
let displayedWord = [];
let guessedLetters = [];
let amountOfWrongGuesses = 0;

// reset the hangman game game function
function restartHangmanGame() {
  selectedWord = getRandomWord();
  console.log("The selected word is:", selectedWord); // for debugging
  displayedWord = [];
  resetWordToDisplay(selectedWord);
  guessedLetters = [];
  amountOfWrongGuesses = 0;
  updateHangmanUI();
}
// This function is invoked after the "Guess letter" button is clicked
function startHangmanTurn() {
  if (displayedWord.includes("_") && amountOfWrongGuesses < 8) {
    getUserGuess();
  }
  updateHangmanUI();
  checkWin();
}

// Select a random word
function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * wordsArray.length);
  return wordsArray[randomIndex];
}
// User guess letter prompt and validation
function getUserGuess() {
  let guessedLetter = "";
  do {
    guessedLetter = prompt("Please enter a letter");
    guessedLetter = guessedLetter.toLowerCase();
    if (guessedLetters.includes(guessedLetter)) {
      alert("You already guessed that letter.");
    } else if (
      !possibleLetters.includes(guessedLetter) ||
      guessedLetter.length > 1
    ) {
      alert("Insert only one letter a-z");
    } else if (!selectedWord.includes(guessedLetter)) {
      alert(`the letter ${guessedLetter} is not in the word`);
      amountOfWrongGuesses++;
      guessedLetters.push(guessedLetter);
    } else {
        handleCorrectGuess(guessedLetter)
    }
  } while (!possibleLetters.includes(guessedLetter));
}

function handleCorrectGuess(guessedLetter) {
  alert(`Correct! letter ${guessedLetter} is in the word`);
  guessedLetters.push(guessedLetter);
  for (let i = 0; i < selectedWord.length; i++) {
    if (selectedWord[i] === guessedLetter) {
      displayedWord[i] = guessedLetter;
    }
  }
}

// Reset word to display
function resetWordToDisplay(selectedWord) {
  for (let i = 0; i < selectedWord.length; i++) {
    displayedWord.push("_");
  }
}

// Check if the game is won
function checkWin() {
  if (!displayedWord.includes("_")) {
    alert("You win! you guessed the word");
  } else if (amountOfWrongGuesses >= 8) {
    alert("The man was hanged, no more turns");
  }
}

// Initialize the game
