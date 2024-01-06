// #############################################################
// #                  Hangman Game Variables                   #
// #############################################################

// Global Variables
const wordsArray = ["example", "javascript"]; // Add more words as needed
let selectedWord = ""; // The word selected for the game
let displayedWord = []; // The word display with blanks and correct guesses
let guessedLetters = []; // Letters that the user has guessed
let amountOfWrongGuesses = 0; // The number of incorrect guesses by the user

// #############################################################
// #                  Hangman Game Functions                   #
// #############################################################

// Function to start or restart the hangman game
function restartHangmanGame() {
    // Step 1: Select a random word from wordsArray using the getRandomWord() function and assign it to selectedWord and console.log it for debugging

    // Step 2: Reset displayedWord to an empty array

    // Step 3 call the resetWordToDisplay function and provide it with the new generated word

    // Step 4: Reset guessedLetters to an empty array and amountOfWrongGuesses to 0
    
    // Step 5: Update the Hangman UI by calling updateHangmanUI
    updateHangmanUI();
}

// Function to randomly select a word from wordsArray
function getRandomWord() {
    // Step 1: Return a randomly selected word from wordsArray
}

// Function to reset the word display with all blanks (_)
function resetWordToDisplay(selectedWord) {
    // Step 1: Run a loop over the selectedWord and add '_' to displayedWord for every letter 
}


// Function to handle a user's turn in Hangman
// * The function that will be called after clicking the "Guess letter" button
function startHangmanTurn() {
    // Step 1: If there are still blanks in displayedWord and amountOfWrongGuesses is less than 8, get a user's guess by calling getUserGuess()

    // Step 2: Update the Hangman UI by calling the "updateHangmanUI()" function
    updateHangmanUI()
    
    // Step 3: Check if the user has won or lost the game by calling checkWin
}

// Function to check if the user has won or lost the game
function checkWin() {
    // Step 1: Check if displayedWord no longer contains any blanks (_) indicating a win

    // Step 2: Check if amountOfWrongGuesses has reached 8, indicating a loss

    // Step 3: Display a win or lose message
}


// Function to prompt the user for a letter and handle the guess
function getUserGuess() {
    // Step 1: Prompt the user to enter a letter and convert it to lowercase using the method .toLowerCase()

    // Step 2: Validate the user's input (single letter, not previously guessed)

    // Step 3: If the letter is not in selectedWord, increment amountOfWrongGuesses and update guessedLetters

    // Step 4: If the letter is in the word, call handleCorrectGuess() function with the current user guess to update the displayed word
}



// Function to handle a user correct input
function handleCorrectGuess(guessedLetter) {
    // Step 1: Alert the user they guessed correctly - "Correct! The letter <guessed letter> is in the word"

    // Step 2: Add the guessed letter to the guessedLetters array

    // Step 3: Run a loop over the selected word and update the displayed word by replacing '_' that matches the user input with the letter from the user's input
}






