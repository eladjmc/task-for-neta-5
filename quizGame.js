// #############################################################
// #                  Quiz game variables                      #
// #############################################################

let quizCorrectAnswersArray = [];
let quizScore = 0;

const quizQuestions = [
  {
    question: "Which keyword is used to declare a block-scoped variable?",
    options: ["var", "let", "const", "int"],
    correctAnswer: 2,
  },
  {
    question: "What is the purpose of the 'const' keyword?",
    options: [
      "Declares a reassignable variable",
      "Declares a constant value",
      "Declares a conditional statement",
      "Declares a loop",
    ],
    correctAnswer: 2,
  },
  {
    question: "How do you write an arrow function in JavaScript?",
    options: [
      "(args) => { code }",
      "(args) -> { code }",
      "function(args) { code }",
      "=> { args, code }",
    ],
    correctAnswer: 1,
  },
  {
    question: "Which method is used to iterate over an array?",
    options: ["loop()", "forEach()", "iterate()", "repeat()"],
    correctAnswer: 2,
  },
  {
    question: "What is the correct syntax for a for loop?",
    options: [
      "for (let i = 0; i < 5)",
      "for (i <= 5; i++)",
      "for (i = 0 to 5)",
      "for (i = 0; i < 5; i++)",
    ],
    correctAnswer: 4,
  },
  {
    question: "How do you declare a JavaScript array?",
    options: [
      "let arr = (1, 2, 3)",
      "let arr = [1, 2, 3]",
      "let arr = {1, 2, 3}",
      "let arr = <1, 2, 3>",
    ],
    correctAnswer: 2,
  },
  {
    question: "What will 'console.log(typeof 42)' output?",
    options: ["'number'", "'int'", "'float'", "'digit'"],
    correctAnswer: 1,
  },
  {
    question: "What does the '===' operator check?",
    options: [
      "Only value equality",
      "Only type equality",
      "Both value and type equality",
      "Not equal value or type",
    ],
    correctAnswer: 3,
  },
  {
    question: "Which method can remove the last element from an array?",
    options: ["pop()", "push()", "removeLast()", "last()"],
    correctAnswer: 1,
  },
  {
    question: "What keyword is used to declare a class in JavaScript?",
    options: ["prototype", "class", "object", "new"],
    correctAnswer: 2,
  },
];


// #############################################################
// #                  Quiz game functions                      #
// #############################################################

// This function will start when clicking the "Start New Quiz" button
function startQuizGame() {
  quizCorrectAnswersArray = [];
  quizScore = 0;
  for (let i = 0; i < quizQuestions.length; i++) {
    let answer;
    do {
      answer = prompt(`Question number: ${i + 1}\n${quizQuestions[i].question}
    1 - ${quizQuestions[i].options[0]}
    2 - ${quizQuestions[i].options[1]}
    3 - ${quizQuestions[i].options[2]}
    4 - ${quizQuestions[i].options[3]}
    `);

      // Parsing the input to an integer
      answer = parseInt(answer);
      // update answers array
      if (checkAnswer(quizQuestions[i], answer)) {
        quizCorrectAnswersArray.push(quizQuestions[i].question);
        quizScore += 100 / quizQuestions.length;
        console.log(quizCorrectAnswersArray);
      }
      // Check if the input is a number and within the range 1-4
    } while (isNaN(answer) || answer < 1 || answer > 4);
  }
  endQuizGame();
}

function checkAnswer(question, answer) {
  return answer === question.correctAnswer;
}
