let text = document.getElementById('text');
let check = document.getElementById('checkAction')
let btnStart = document.getElementById('start');
let btnNo = document.getElementById('checkNo');
let btnCheck = document.getElementById('check');
let score = -1;

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
    btnStart.style.visibility = 'hidden';
    btnStart.textContent = 'Next!';
}

function checkAnswer(){

    btnCheck.addEventListener('click',() =>{
        if(text.textContent.includes('Simon')){
            check.textContent = 'Correct!';
            btnStart.style.visibility = 'visible';
        }else{
            endGame();
        }
    });

    btnNo.addEventListener('click',() =>{
        if(!(text.textContent.includes('Simon'))){
            check.textContent = 'Correct!';
        }else{
            endGame();
        }
    });

    score++;
}

function endGame(){
    score = -1;
    text.textContent = 'You failed! Click the button to start!!';
    btnStart.textContent = 'Start!';
}

btnStart.addEventListener('click', start);
