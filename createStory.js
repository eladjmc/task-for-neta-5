const partialStory = [
  "I got up early this morning in order to go to school, I've put on my ",
  " shirt and went to my friends Idan's house we walked to school together, i'm older than Idan i'm already ",
  " years old. after i got to Idan's house i just realized, I forgot to take the ",
  " my mom packed for me, but Idan had some at his house so he spared me, one we both study at",
  " school, it's the best school ever.\n that was my day in a nutshell.",
];
let fullStory = "";

const questions = [
  "What is your favorite color?",
  "How old are you?",
  "What is your fruit?",
  "What school you go to?",
];
let answers = [];


function resetStory(){
    answers = [];
    fullStory = ""
    updateStoryUI()
}

function startQuestions() {
  for (let i = 0; i < questions.length; i++) {
    do {
      const answer = prompt(questions[i]);
      if (answers[i] !== undefined) {
        answers.push(answer);
      }
    } while (answers[i] !== undefined);
  }
  resetStory()
  createStory();
}

function createStory() {
    for(let i = 0; i< answers.length; i++){
        fullStory += partialStory[i]
        fullStory += answers[i]
    }
    fullStory += partialStory[partialStory.length-1]
    updateStoryUI()
}
