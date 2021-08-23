// select all elements
let start = document.getElementById('start');
let questionBox = document.getElementById('question-box');

let questionElement = document.getElementById('question')
let answersElement = document.getElementById('answers')

let nextButton = document.getElementsByClassName('next')
let exitButton = document.getElementsByClassName('exit')

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
    resetState()
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
        button.addEventListener('click', answerChoice)
        answersElement.appendChild(button)
    });

}
function resetState() {
  while (answersElement.firstChild) {
    answersElement.removeChild(answersElement.firstChild)
  }

}

function answerChoice(e) {
let selectedButton = e.target
let correct = selectedButton.dataset.correct
statusClass(document.body, correct)
Array.from(answersElement.firstChild).forEach(button => {
  statusClass(button, button.dataset.correct)
})

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
// create questions
//Q1
let questions = [
    { 
        question: 'Which city is the capital of Brazil ?',
        answers: [
             { choice1: 'Buenos Aires', correct: false },
             { choice2: 'Paris', correct: false },
             { choice3: 'Brasilia', correct: true },
             { choice4: 'Tokyo', correct: false }
        ]
    },
//Q2
    {
        question: 'Which city is the capital of Canada ?',
        answers: [
          { choice1: 'Dublin', correct: false },
          { choice2: 'Montevideo', correct: false },
          { choice3: 'Panama City', correct: false },
          { choice4: 'Ottawa', correct: true }
        ]
      },
//Q3
{
    question: 'Which city is the capital of Portugal ?',
    answers: [
      { choice1: 'Lisbon', correct: true },
      { choice2: 'Warsaw', correct: false },
      { choice3: 'Bern', correct: false },
      { choice4: 'Accra', correct: false }
    ]
  },
//Q4
{
question: 'Which city is the capital of Australia ?',
    answers: [
      { choice1: 'Canberra', correct: true },
      { choice2: 'Madrid', correct: false },
      { choice3: 'Auckland', correct: false },
      { choice4: 'Kyiv', correct: false }
    ]
  },
//Q5
{
question: 'Which city is the capital of France ?',
    answers: [
      { choice1: 'London', correct: false },
      { choice2: 'Rome', correct: false },
      { choice3: 'Santiago', correct: false },
      { choice4: 'Paris', correct: true }
    ]
  },
//Q6
{
question: 'Which city is the capital of England?',
    answers: [
      { choice1: 'Prague', correct: false },
      { choice2: 'London', correct: true },
      { choice3: 'Mexico City', correct: false },
      { choice4: 'Abuja', correct: false }
    ]
  },
//Q7
{
question: 'Which city is the capital of South Korea ?',
    answers: [
      { choice1: 'Seoul', correct: true },
      { choice2: 'Hanoi', correct: false },
      { choice3: 'Buenos Aires', correct: false },
      { choice4: 'Tokyo', correct: false }
    ]
  },
//Q8
{
question: 'Which city is the capital of USA ?',
    answers: [
      { choice1: 'Athens', correct: false },
      { choice2: 'Cairo', correct: false },
      { choice3: 'Washington', correct: true },
      { choice4: 'Berlin', correct: false }
    ]
  },
//Q9
{
question: 'Which city is the capital of Germany?',
    answers: [
      { choice1: 'Vienna', correct: false },
      { choice2: 'Moscow', correct: false },
      { choice3: 'London', correct: false },
      { choice4: 'Berlin', correct: true }
    ]
  },
//Q10
{
question: 'Which city is the capital of Russia?',
    answers: [
      { choice1: 'Moscow', correct: true },
      { choice2: 'Vilnius', correct: false },
      { choice3: 'Phnom Penh', correct: false },
      { choice4: 'Washington', correct: false }
    ]
  },

]
