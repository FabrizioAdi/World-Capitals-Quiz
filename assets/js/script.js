// Select all elements
let start = document.querySelector('#start');
let questionBox = document.querySelector('#question-box');

let questionElement = document.querySelector('#question')
let answersElement = document.querySelector('#answers')

let score = document.querySelector('#score')

let next = document.querySelector('#next')
let exit = document.querySelector('#exit')

let randomQuestions, currentQuestion

start.addEventListener('click', startGame);
next.addEventListener('click', () => {
  currentQuestion++
  nextQuestion()
})
// StartGame the main game function
function startGame() {
    console.log('start')
    start.classList.add('hide')
    randomQuestions = questions.sort(() => Math.random() - .5)
    currentQuestion = 0
    questionBox.classList.remove('hide')
    nextQuestion()

}
// Function of changing the question to the next one
function nextQuestion() {
    resetState()
    showQuestion(randomQuestions[currentQuestion])
}
// Random question section
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answers => {
        let button = document.createElement('button')
        button.innerText = answers.choice
        button.classList.add('button')
        if (answers.correct) {
            button.dataset.correct = answers.correct
        }
        button.addEventListener('click', answersChoice)
        answersElement.appendChild(button)
    });

}

function resetState() {
  next.classList.add('hide')
  while (answersElement.firstChild) {
    answersElement.removeChild(answersElement.firstChild)
  }

}
// Function that allows to choose an answer, as well as restart the game after completed all the questions.
function answersChoice(e) {
let selectedButton = e.target
let correct = selectedButton.dataset.correct
statusClass(document.body, correct)
Array.from(answersElement.firstChild).forEach(button => {
  statusClass(button, button.dataset.correct)
})
if (randomQuestions.length > currentQuestion + 1) {
  next.classList.remove('hide')
} else {
  start.innerText = 'Start again'
  start.classList.remove('hide')
}

// Calculate correct and incorrect answers

  

function statusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
   
  } else {
    element.classList.add('incorrect')
  }
}

function clearStatusClass (element) {
  element.classList.remove('correct')
  element.classList.remove('incorrect')
}
}

// Game questions
//Q1
let questions = [
    { 
        question: 'Which city is the capital of Brazil ?',
        answers: [
             { choice: 'Buenos Aires', correct: false },
             { choice: 'Paris', correct: false },
             { choice: 'Brasilia', correct: true },
             { choice: 'Tokyo', correct: false }
        ]
    },
//Q2
    {
        question: 'Which city is the capital of Canada ?',
        answers: [
          { choice: 'Dublin', correct: false },
          { choice: 'Montevideo', correct: false },
          { choice: 'Panama City', correct: false },
          { choice: 'Ottawa', correct: true }
        ]
      },
//Q3
{
    question: 'Which city is the capital of Portugal ?',
    answers: [
      { choice: 'Lisbon', correct: true },
      { choice: 'Warsaw', correct: false },
      { choice: 'Bern', correct: false },
      { choice: 'Accra', correct: false }
    ]
  },
//Q4
{
question: 'Which city is the capital of Australia ?',
    answers: [
      { choice: 'Canberra', correct: true },
      { choice: 'Madrid', correct: false },
      { choice: 'Auckland', correct: false },
      { choice: 'Kyiv', correct: false }
    ]
  },
//Q5
{
question: 'Which city is the capital of France ?',
    answers: [
      { choice: 'London', correct: false },
      { choice: 'Rome', correct: false },
      { choice: 'Santiago', correct: false },
      { choice: 'Paris', correct: true }
    ]
  },
//Q6
{
question: 'Which city is the capital of England?',
    answers: [
      { choice: 'Prague', correct: false },
      { choice: 'London', correct: true },
      { choice: 'Mexico City', correct: false },
      { choice: 'Abuja', correct: false }
    ]
  },
//Q7
{
question: 'Which city is the capital of South Korea ?',
    answers: [
      { choice: 'Seoul', correct: true },
      { choice: 'Hanoi', correct: false },
      { choice: 'Buenos Aires', correct: false },
      { choice: 'Tokyo', correct: false }
    ]
  },
//Q8
{
question: 'Which city is the capital of USA ?',
    answers: [
      { choice: 'Athens', correct: false },
      { choice: 'Cairo', correct: false },
      { choice: 'Washington', correct: true },
      { choice: 'Berlin', correct: false }
    ]
  },
//Q9
{
question: 'Which city is the capital of Germany?',
    answers: [
      { choice: 'Vienna', correct: false },
      { choice: 'Moscow', correct: false },
      { choice: 'London', correct: false },
      { choice: 'Berlin', correct: true }
    ]
  },
//Q10
{
question: 'Which city is the capital of Russia?',
    answers: [
      { choice: 'Moscow', correct: true },
      { choice: 'Vilnius', correct: false },
      { choice: 'Phnom Penh', correct: false },
      { choice: 'Washington', correct: false }
    ]
  },

]
