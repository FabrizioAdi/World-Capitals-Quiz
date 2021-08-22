// select all elements
let start = document.getElementById('start');
let questionBox = document.getElementById('question-box');

let questionElement = document.getElementById('question')
let answersElement = document.getElementById('answers')

let randomQuestions, currentQuestion

start.addEventListener('click', startGame);

function startGame() {
    console.log('start')
    start.classList.add('hide')
    randomQuestions = questions.sort(() => Math.random() - .5)
    currentQuestion = 0
    questionBox.classList.remove('hide')
    nextQuestion()

}

function nextQuestion() {
    showQuestion(randomQuestions[currentQuestion])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answers => {
        let button = document.createElement('button')
        button.innerText = answers.text
        button.classList.add('button')
        if (answers.correct) {
            button.dataset.correct = answers.correct
        }
        button.addEventListener('click', secelctAnswers)
        answersElement.appendChild(button)
    });

}

function answerChoice() {

}
// create questions
//Q1
let questions = [
    { 
        question: 'What city is the capital of Brazil ?',
        answers: [
             { text: 'Buenos Aires', correct: false },
             { text: 'Paris', correct: false },
             { text: 'Brasilia', correct: true },
             { text: 'Tokyo', correct: false }
        ]
    },
//Q2
    {
        question: 'What city is the capital of Canada ?',
        answers: [
          { text: 'Dublin', correct: false },
          { text: 'Montevideo', correct: false },
          { text: 'Panama City', correct: false },
          { text: 'Ottawa', correct: true }
        ]
      },
//Q3
{
    question: 'What city is the capital of Portugal ?',
    answers: [
      { text: 'Lisbon', correct: true },
      { text: 'Warsaw', correct: false },
      { text: 'Bern', correct: false },
      { text: 'Accra', correct: false }
    ]
  },
//Q4
{
question: 'What city is the capital of Australia ?',
    answers: [
      { text: 'Canberra', correct: true },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
//Q5
{
question: 'What city is the capital of ?',
    answers: [
      { text: '', correct: true },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
//Q6
{
question: 'What city is the capital of ?',
    answers: [
      { text: '', correct: true },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
//Q7
{
question: 'What city is the capital of ?',
    answers: [
      { text: '', correct: true },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
//Q8
{
question: 'What city is the capital of ?',
    answers: [
      { text: '', correct: true },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
//Q9
{
question: 'What city is the capital of ?',
    answers: [
      { text: '', correct: true },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },
//Q10
{
question: 'What city is the capital of ?',
    answers: [
      { text: '', correct: true },
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false }
    ]
  },




]
