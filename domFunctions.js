const navbar = document.querySelector("nav");
const mainContent = document.querySelector("main");
const gameContainer = document.querySelector(".game-container");
let gameTitle = document.querySelector("h1");
const TASKS_TITLES = ["Quiz Game", "Hangman Game", "Game 3"];

// #############################################################
// #                Starting navbar logic                      #
// #############################################################

const updateNavbarButton = (tasks) => {
  tasks.forEach((task, index) => {
    renderTaskButton(task, index);
  });
};

const renderTaskButton = (isButtonNeeded, taskNumber) => {
  if (!isButtonNeeded) {
    return;
  }
  const newButton = document.createElement("button");
  newButton.textContent = TASKS_TITLES[taskNumber];
  navbar.appendChild(newButton);
  newButton.addEventListener("click", () => {
    renderPage(taskNumber);
  });
};

const renderPage = (taskNumber) => {
  gameTitle.remove();
  gameTitle = document.createElement("h1");
  gameTitle.textContent = TASKS_TITLES[taskNumber];
  mainContent.insertBefore(gameTitle, mainContent.firstChild);
  resetPage();
  switch (taskNumber) {
    case 0:
      createStoryPage(resetStory);
      break;
    case 1:
      createQuizPage(startQuizGame);
      break;
    case 2:
      createHangmanPage(restartHangmanGame);
      break;

    default:
      break;
  }
};

const resetPage = () => {
  gameContainer.innerHTML = "";
};



// #############################################################
// #                  Story game logic                         #
// #############################################################
function createStoryPage(gameLogicFunction) {
  const startQuestionsButton = document.createElement("button");
  startQuestionsButton.textContent = "Start Story";
  startQuestionsButton.addEventListener("click", gameLogicFunction);
  gameContainer.appendChild(startQuestionsButton);
}





// #############################################################
// #                  quiz game logic                          #
// #############################################################

function createQuizPage(gameLogicFunction) {
  const startQuizButton = document.createElement("button");
  startQuizButton.textContent = "Start New Quiz!";
  startQuizButton.addEventListener("click", gameLogicFunction);
  gameContainer.appendChild(startQuizButton);
}

function endQuizGame() {
  let scoreContainer = document.querySelector(".quiz-score-container");
  if (scoreContainer) {
    scoreContainer.innerHTML = "";
  } else {
    scoreContainer = document.createElement("div");
    scoreContainer.classList.add("quiz-score-container");
  }

  // Display the score
  const scoreDisplay = document.createElement("h2");
  scoreDisplay.textContent = `Score: ${quizScore}%`;
  scoreContainer.appendChild(scoreDisplay);

  // Display correct answers
  const answersTitle = document.createElement("h3");
  answersTitle.textContent = "Questions you solved correctly:";
  scoreContainer.appendChild(answersTitle);

  const answersList = document.createElement("ul");
  quizCorrectAnswersArray.forEach((answer, index) => {
    const answerItem = document.createElement("li");
    answerItem.textContent = `Question ${index + 1}: ${answer}`;
    answersList.appendChild(answerItem);
  });

  scoreContainer.appendChild(answersList);

  // Append the score container to mainContent
  gameContainer.appendChild(scoreContainer);
}

// #############################################################
// #                Hangman game logic                         #
// #############################################################

const HANGMAN_STAGES = [
  "  +----+\n  |    |\n       |\n       |\n       |\n       |\n=========",
  "  +----+\n  |    |\n  O    |\n       |\n       |\n       |\n=========",
  "  +----+\n  |    |\n  O    |\n  |    |\n       |\n       |\n=========",
  "  +----+\n  |    |\n  O    |\n /|    |\n       |\n       |\n=========",
  "  +----+\n  |    |\n  O    |\n /|\\   |\n       |\n       |\n=========",
  "  +----+\n  |    |\n  O    |\n /|\\   |\n /     |\n       |\n=========",
  "  +----+\n  |    |\n  O    |\n /|\\   |\n / \\   |\n       |\n=========",
  "  +----+\n  |    |\n [O    |\n /|\\   |\n / \\   |\n       |\n=========",
  "  +----+\n  |    |\n [O]   |\n /|\\   |\n / \\   |\n       |\n=========",
];

function createHangmanPage(gameRestartFunction) {
  gameContainer.innerHTML = "";
  const resetHangmanButton = document.createElement("button");
  resetHangmanButton.classList.add("reset-hangman-btn");
  resetHangmanButton.textContent = "Guess another word";
  resetHangmanButton.addEventListener("click", restartHangmanGame);
  gameContainer.appendChild(resetHangmanButton);
  
  const guessContainer = document.createElement("div");
  guessContainer.classList.add("guess-container");
  gameContainer.appendChild(guessContainer);

  const remainingGuess = document.createElement("h3");
  remainingGuess.classList.add("remaining-guesses");
  guessContainer.appendChild(remainingGuess);
  
  const wordTitle = document.createElement("h2");
  wordTitle.classList.add("word-title");
  wordTitle.textContent = "Your Word:";
  guessContainer.appendChild(wordTitle);
  
  const wordToShow = document.createElement("h1");
  wordToShow.classList.add("word-to-show");
  guessContainer.appendChild(wordToShow);
  
  const startGuessButton = document.createElement("button");
  startGuessButton.textContent = "Guess letter";
  startGuessButton.addEventListener("click", startHangmanTurn);
  guessContainer.appendChild(startGuessButton);

  const hangmanContainer = document.createElement("div");
  hangmanContainer.classList.add("hangman-draw-container")
  gameContainer.appendChild(hangmanContainer)

  gameRestartFunction();
}

function updateHangmanUI() {
 const hangmanContainer = document.querySelector(".hangman-draw-container")
  const remainingGuess = document.querySelector(".remaining-guesses");
  const wordToShow = document.querySelector(".word-to-show");
  remainingGuess.textContent = `You were wrong ${amountOfWrongGuesses} times`;
  wordToShow.textContent = updateWordToShowText();
  hangmanContainer.innerHTML = `<pre>${HANGMAN_STAGES[amountOfWrongGuesses]}</pre>`

}

function updateWordToShowText() {
  let updatedWordToShow = "";
  displayedWord.forEach((letter, index) => {
    updatedWordToShow += letter;
    updatedWordToShow += "  ";
  });
  return updatedWordToShow;
}
