// #############################################################
// #                  Story Game Variables                     #
// #############################################################

// Part of the story with gaps
const partialStory = [
  // ... Your story parts here ...
  /*
    Example:
    "I got up early this morning in order to go to ",
    "I had for breakfast ",
    "... and so on"
  */
];


let fullStory = ""; // This will be the assembled story with user inputs
const questions = [
  // ... Your questions here ...
  /*
    Example:
    "Where did you go this morning?",
    "What did you have for breakfast?",
    "... and so on"
  */
];
let answers = []; // To store the user's answers

// #############################################################
// #                  Story Game Functions                     #
// #############################################################

// Function to reset the story and start over
function resetStory() {
    // Step 1: Reset the answers array and fullStory string
    // Step 2: Update the Story UI (this function is provided, you don't need to write it)
    updateStoryUI();
}

// Function to start gathering answers - Invoked when the start button is clicked
function startQuestions() {
    // Step 1: Call resetStory to clear previous game data

    // Step 2: Loop through each question in the questions array

    // Step 3: Prompt the user for an answer to each question

    // Step 4: Validate the input (make sure it's not empty)

    // Step 5: Add the answer to the answers array

    // Step 6: Call createStory to build the full story
    createStory();
}

// Function to create the full story
function createStory() {
    // Step 1: Initialize fullStory as an empty string

    // Step 2: Loop through the answers array

    // Step 3: For each answer, append the corresponding part of the story and the user's answer to fullStory

    // Step 4: After the loop, append the last part of the story to fullStory

    // Step 5: Update the Story UI (this function is provided, you don't need to write it)
    updateStoryUI();
}
