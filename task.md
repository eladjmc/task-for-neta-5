#### Project Setup

- **Create Global Variables**:  
  Define global variables `quizCorrectAnswersArray` and `quizScore` to keep track of the user's correct answers and score.

#### Game Logic Functions

1. **Start Quiz Game**
   - Initialize the game with a function `startQuizGame`.
   - Reset `quizCorrectAnswersArray` and `quizScore` to their initial states.
   - Use a loop to iterate over each question in `quizQuestions`.

2. **Prompt User for Each Question**
   - Create a function to display each question and options using `prompt`.
   - Ensure that the user's input is a number between 1 and 4.
   - Convert the input to an integer.

3. **Check User's Answer**
   - Create a function `checkAnswer` that compares the user's answer to the correct answer.
   - If the answer is correct, add the question to `quizCorrectAnswersArray` and update `quizScore`.

4. **End the Quiz**
   - After all questions are answered, call `endQuizGame`.
   - Display the user's score and the list of questions they answered correctly.

#### End Game Display

**Displaying Results**
   - Use provided DOM manipulation functions to display the results on the screen.

#### Helper Functions

- **Providing Pre-Written DOM Manipulation Functions**:  
  I provided some function that will print the result to the screen by using dom manipulation, html and css