const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const questions = [
  "What is your name? ",
  "What would you be rather doing? ",
  "What is your preferred programming language? "
];

const collectAnswer = (questions, done) => {
  const answers = [];
  const [firstQuestion] = questions;

  const questionAnswered = answer => {
    answers.push(answer);
    if (answers.length < questions.length) {
      rl.question(questions[answers.length], questionAnswered);
    } else {
      done(answers);
    }
  };

  rl.question(firstQuestion, questionAnswered);

  // questions.forEach(q => {
  //   rl.question(q, answer => {
  //     console.log(answer);
  //     answers.push(answer);
  //   });
  // });

  // done(answers);
};

collectAnswer(questions, answer => {
  console.log("Thank you for your answers");
  console.log(answer);
  process.exit();
});
