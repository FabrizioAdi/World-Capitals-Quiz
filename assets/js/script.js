// select all elements
let start = document.getElementById('start');
let questionBox = document.getElementById('question-box');

let questionElement = document.getElementById('question')
let answersElement = document.getElementById('answers')

let randomQuestions, currentQuestion

start.addEventListener('click', startGame);
// startGame control function
function startGame() {
    console.log('start')
    start.classList.add('hide')
    randomQuestions = questions.sort(() => Math.random() - .5)
    currentQuestion = 0
    questionBox.classList.remove('hide')
    nextQuestion()

}
// function of changing the question to the next one
function nextQuestion() {
    showQuestion(randomQuestions[currentQuestion])
}
// random question section
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
      { text: 'Madrid', correct: false },
      { text: 'Auckland', correct: false },
      { text: 'Kyiv', correct: false }
    ]
  },
//Q5
{
question: 'What city is the capital of France ?',
    answers: [
      { text: 'London', correct: false },
      { text: 'Rome', correct: false },
      { text: 'Santiago', correct: false },
      { text: 'Paris', correct: true }
    ]
  },
//Q6
{
question: 'What city is the capital of England?',
    answers: [
      { text: 'Prague', correct: false },
      { text: 'London', correct: true },
      { text: 'Mexico City', correct: false },
      { text: 'Abuja', correct: false }
    ]
  },
//Q7
{
question: 'What city is the capital of South Korea ?',
    answers: [
      { text: 'Seoul', correct: true },
      { text: 'Hanoi', correct: false },
      { text: 'Buenos Aires', correct: false },
      { text: 'Tokyo', correct: false }
    ]
  },
//Q8
{
question: 'What city is the capital of USA ?',
    answers: [
      { text: 'Athens', correct: false },
      { text: 'Cairo', correct: false },
      { text: 'Washington', correct: true },
      { text: 'Berlin', correct: false }
    ]
  },
//Q9
{
question: 'What city is the capital of Germany?',
    answers: [
      { text: 'Vienna', correct: false },
      { text: 'Moscow', correct: false },
      { text: 'London', correct: false },
      { text: 'Berlin', correct: true }
    ]
  },
//Q10
{
question: 'What city is the capital of Russia?',
    answers: [
      { text: 'Moscow', correct: true },
      { text: 'Vilnius', correct: false },
      { text: 'Phnom Penh', correct: false },
      { text: 'Washington', correct: false }
    ]
  },

]
