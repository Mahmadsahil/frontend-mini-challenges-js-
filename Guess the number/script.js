let form = document.querySelector("#form");
let input = document.querySelector("#inp");
let submit = document.querySelector("#submit");
let startGame = document.querySelector("#startGame");
let resultMsg = document.querySelector("#resultMsg");
let guessesMsg = document.querySelector("#guesses");


let guessArray = [];
let computerGuess;

function onStartGame() {
    resultMsg.textContent = '';
    guesses.textContent = '';
    guessArray = [];
    computerGuess = Math.floor(Math.random() * 100);
    input.disabled = false;
    submit.disabled = false;
    startGame.disabled = true;
    startGame.style.cursor='not-allowed';
    input.focus();
}

function onFinishGame(massage) {
    resultMsg.textContent = massage;
    input.disabled = true;
    submit.disabled = true;
    startGame.style.cursor='pointer';
    startGame.disabled = false;
    startGame.focus();
}

function onInput(e) {
    e.preventDefault();
    const guess = +input.value;
    input.value = '';
    guessArray.push(guess);
    guessesMsg.textContent = `Your guesses ${guessArray.join(", ")}`

    if (guess > computerGuess) {
        resultMsg.textContent = 'Too high';
    } else if (guess < computerGuess) {
        resultMsg.textContent = 'Too low';
    } else {
        onFinishGame("You get it! Congrats");
        resultMsg.style.color = "green";
        return
    }

    input.focus();

    if (guessArray.length >= 10) {
        onFinishGame('You lost! The number was ' + computerGuess);
        resultMsg.style.color = "red";

    }
}

form.addEventListener("submit", onInput);
startGame.addEventListener("click", onStartGame);
onStartGame();