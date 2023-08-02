let text = document.getElementById('text');
let check = document.getElementById('checkAction')
let btnStart = document.getElementById('start');
let btnNo = document.getElementById('checkNo');
let btnCheck = document.getElementById('check');

let actions = ['Simon says Dance!',
'Javier says Baila!',
'Simon says dont listen ti Simon',
'Symon says play TV',
'Simon says play with me',
'Just Dance!',
'Do a bakcplip',
'Simon says "Watch a movie"!',
'Simon says call your grandmother',
'Go to JavaScripts Offices and burn it'];

function start(){
    showMessage();
    checkAnswer();
    btnCheck.style.visibility = 'visible';
    btnNo.style.visibility = 'visible';
}

function showMessage(){
    let numAction = Math.floor(Math.random() * actions.length);
    let msg = actions[numAction];
    text.textContent = msg;
    check.textContent = '';
    btnStart.textContent = 'Next!';
}

function checkAnswer(){

    btnCheck.addEventListener('click',() =>{
        if(text.textContent.includes('Simon')){
            check.textContent = 'Correct!';
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
}

function endGame(){
    text.textContent = 'You fail! Click the button to start!!';
    btnStart.textContent = 'Star!';
}

btnStart.addEventListener('click', start);
