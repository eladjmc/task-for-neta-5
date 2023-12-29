const navbar = document.querySelector("nav");
const mainContent = document.querySelector("main");
const gameContainer = document.querySelector(".game-container");
let gameTitle = document.querySelector("h1");

const TASKS_TITLES = ["Quiz Game", "Game 2", "Game 3"];

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
      createQuizPage(startQuizGame);
      break;

    default:
      break;
  }
};

const resetPage = () => {
  gameContainer.innerHTML = "";
};

// #############################################################
// #                  quiz game logic                          #
// #############################################################

function createQuizPage(gameLogicFunction) {
  startQuizButton = document.createElement("button");
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
  mainContent.appendChild(scoreContainer);
}
