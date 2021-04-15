const startQuizContainer = document.querySelector('.startQuizContainer');
const quizContainer = document.querySelector('.quizContainer');
const questionPlace = document.querySelector('.question');
const gameOver = document.querySelector('.lose');
const win = document.querySelector('.win');
const a = document.querySelector('.a');
const b = document.querySelector('.b');
const c = document.querySelector('.c');
const d = document.querySelector('.d');
const liEl = document.querySelectorAll('li');
let arrayNumber = 0;
let currentAnswer = '';

liEl.forEach(element => {
    element.addEventListener('click', function(){
        currentAnswer = this;
        liEl.forEach(e => {
            e.style.border = 'none';
        });
        this.style.border = '2px solid blue';
    });
});

const tryAgain = function(){
    gameOver.classList.add('none');
    win.classList.add('none');
    startQuizContainer.classList.remove('none');
    arrayNumber = 0;
    currentAnswer.style.border = 'none';
};

const showResult = function(){
    if(currentAnswer.textContent == myQuestions[arrayNumber].correctAnswer){
            arrayNumber = arrayNumber + 1;
            currentAnswer.classList.add('green');
        setTimeout(function(){
            currentAnswer.classList.remove('green');
            if(myQuestions.length == arrayNumber){
                win.classList.remove('none');
                quizContainer.classList.add('none');
            }else{
                currentAnswer.style.border = 'none';
                buildQuiz();
            };
        }, 1500);
    }else{
        currentAnswer.classList.add('red');
        setTimeout(function(){
            currentAnswer.classList.remove('red');
            gameOver.classList.remove('none');
            quizContainer.classList.add('none');
        }, 1500);
    }
}

const buildQuiz = function(){
    questionPlace.textContent = myQuestions[arrayNumber].question;
    a.textContent = myQuestions[arrayNumber].answers.a;
    b.textContent = myQuestions[arrayNumber].answers.b;
    c.textContent = myQuestions[arrayNumber].answers.c;
    d.textContent = myQuestions[arrayNumber].answers.d;
}

const startGame = function(){
    startQuizContainer.classList.add('none');
    quizContainer.classList.remove('none');
    buildQuiz();
}
