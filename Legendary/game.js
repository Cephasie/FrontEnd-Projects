const guessBtn = document.querySelector(".myGuess")
const playBtn = document.querySelector(".myPlay")
const quitBtn = document.querySelector(".myQuit")
const inputArea = document.querySelector("#number")
const p = document.querySelector(".p-tag")


let maxiGuess = 4;
let counter = 0;


let guess = function tryAGuess(){
    // let randonNumber = Math.floor(Math.random() * 10);
    let randonNumber = 4;
    let numberGuessed = parseInt(inputArea.value)
    console.log(numberGuessed)
    console.log(randonNumber)
    if(numberGuessed == randonNumber){
        p.textContent = "Correct guess"
        inputArea.disabled = true;
        guessBtn.disabled = true;
    } else if(numberGuessed > randonNumber){
        p.textContent = "Incorrect. You guessed higher"
        inputArea.value = ""
        counter++;
    } else if(numberGuessed < randonNumber){
        p.textContent = "Incorrect. You guessed lower"
        inputArea.value = ""
        counter++;
    }
    endGame();
}

let quit = function toQuit(){
    inputArea.disabled = true;
    playBtn.disabled = false;
    guessBtn.disabled = true;
    // window.close();
}

let playAgain = function toPlayAgain(){
    counter = 0;
    inputArea.value = ""
    inputArea.disabled = false;
    guessBtn.disabled = false;
    quitBtn.disabled = false;
    p.textContent = ""
}

function endGame(){
    if(counter === maxiGuess){
        p.textContent = "Game Over!"
        inputArea.disabled = true;
        guessBtn.disabled = true;
        quitBtn.disabled = true;
    }
}


guessBtn.addEventListener('click', guess)
quitBtn.addEventListener('click',quit)
playBtn.addEventListener('click',playAgain)