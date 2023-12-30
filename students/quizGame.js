// #############################################################
// #                  Quiz game variables                      #
// #############################################################

// Global Variables
let quizCorrectAnswersArray = []; // To store the questions that the user answered correctly
let quizScore = 0; // To keep track of the user's score

// Quiz questions array
const quizQuestions = [
    // ... Your quiz questions here - you need at least 7
    /*
      Example:
        {
          question: "How do you declare a JavaScript array?",
          options: [
          "const arr = (1, 2, 3)",
          "const arr = [1, 2, 3]",
          "const arr = {1, 2, 3}",
          "const arr = <1, 2, 3>",
          ],
          correctAnswer: 2,
        }, 
    */
];



// #############################################################
// #                  Quiz game functions                      #
// #############################################################

// Function to start the quiz game - This function will invoke when the play button is clicked
function startQuizGame() {
    // Step 1: Reset quizCorrectAnswersArray and quizScore

    // Step 2: Iterate over each question in quizQuestions

    // Step 3: For each question, prompt the user for an answer and if the answer is not a number 1-4 prompt again

    // Step 4: Check if the answer is correct using checkAnswer function

    // Step 5: If correct, update quizCorrectAnswersArray and quizScore

    // Step 6: After all questions, call endQuizGame to show results (this function is provided, you don't need to write it)
    endQuizGame()
}

// Function to check the user's answer
function checkAnswer(question, userAnswer) {
    // Step 1: Compare userAnswer with the correct answer in the question
    // Step 2: Return true if the answer is correct, false otherwise
}