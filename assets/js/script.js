// select all elements
let start = document.getElementById('start');
let questionBox = document.getElementById('question-box');
start.addEventListener('click', startGame);

function startGame() {
    console.log('start')
    start.classList.add('hide')
    questionBox.classList.remove('hide')

}



