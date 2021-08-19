// select all elements
const start = document.getElementsByClassName('start')
const question = document.getElementById('question')
start.addEventListener('click', startGame)






function startGame()
console.log('start')

// create questions
let question = [
    { 
        question: 'What city is the capital of Brazil',
        answers: [
             { text: '', correct: false }
             { text: '', correct: false }
             { text: '', correct: true }
             { text: '', correct: false } 
        ]
    }    
];
    