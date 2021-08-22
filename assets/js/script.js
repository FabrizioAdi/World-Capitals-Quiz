// select all elements
let start = document.getElementById('start');
let questionBox = document.getElementById('question-box');

let randomQuestion, currentQuestion

start.addEventListener('click', startGame);

function startGame() {
    console.log('start')
    start.classList.add('hide')
    randomQuestion = questions.sort(()=> Math.random() - .5)
    currentQuestion = 0
    questionBox.classList.remove('hide')
    nextQuestion()

}

function nextQuestion {
    showQuestion(randomQuestion[currentQuestion])
}

function showQuestion(question)

function answerChoice {

}



// create questions
let question = [
    { 
        question: 'What city is the capital of Brazil',
        answers: [
             { text: 'Buenos Aires', correct: false }
             { text: 'Paris', correct: false }
             { text: 'Brasilia', correct: true }
             { text: 'Tokyo', correct: false } 
        ]
    }    
];
    