// select all elements
let start = document.getElementById('start');
let questionBox = document.getElementById('question-box');

let randomQuestion, currentQuestion
let questionElement = document.getElementById('question')
let answersElement = document.getElementById('answers')

start.addEventListener('click', startGame);

function startGame() {
    console.log('start')
    start.classList.add('hide')
    randomQuestion = questions.sort(()=> Math.random() - .5)
    currentQuestion = 0
    questionBox.classList.remove('hide')
    nextQuestion()

}

function nextQuestion() {
    showQuestion(randomQuestion[currentQuestion])
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
let question = [
    { 
        question: 'What city is the capital of Brazil',
        answers: [
             { text: 'Buenos Aires', correct: false },
             { text: 'Paris', correct: false },
             { text: 'Brasilia', correct: true },
             { text: 'Tokyo', correct: false }
        ]
    }    
];
    