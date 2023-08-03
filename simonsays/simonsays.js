let text = document.getElementById('text');
let check = document.getElementById('checkAction')
let btnStart = document.getElementById('start');
let btnNo = document.getElementById('checkNo');
let btnCheck = document.getElementById('check');
let maxScore = document.getElementById('max');
let score = -1;
let scores = [];

let actions = ['Simon says Dance!',
'Javier says baila!',
'Simon says don´t listen to Simon',
'Symon says play TV',
'Simon says play with me',
'Just Dance!',
'Do a bakcflip',
'Simon says "Watch a movie"!',
'Simon says call your grandmother',
'Go to the JavaScript Offices and burn them'];

function start(){
    showMessage();
    checkAnswer();
    btnCheck.style.visibility = 'visible';
    btnNo.style.visibility = 'visible';
    document.querySelector('span').textContent = score;
}

function showMessage(){
    let numAction = Math.floor(Math.random() * actions.length);
    let msg = actions[numAction];
    text.textContent = msg;
    check.textContent = '';
    btnStart.style.display = 'none';
    btnStart.textContent = 'Next!';
}

function checkAnswer(){

    btnCheck.addEventListener('click',() =>{
        if(text.textContent.includes('Simon')){
            check.textContent = 'Correct!';
            btnStart.style.display = 'flex';
        }else{
            endGame();
        }
    });

    btnNo.addEventListener('click',() =>{
        if(!(text.textContent.includes('Simon'))){
            check.textContent = 'Correct!';
            btnStart.style.display = 'flex';
        }else{
            endGame();
        }
    });

    score++;
}

function endGame(){
    scores.push(score);
    score = -1;
    btnStart.style.display = 'flex';
    text.textContent = 'You failed! Click the button to start!!';
    btnStart.textContent = 'Start!';
    maxScore.textContent = Math.max(...scores)
}

btnStart.addEventListener('click', start);
