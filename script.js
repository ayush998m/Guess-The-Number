let Input = document.querySelector('.userInput')
const hint = document.querySelector('.hint')



let computerNumber = getNumber();

document.querySelector('.btnCheck').addEventListener('click', () => {
    let userInput = Input.value;

    if (isNaN(userInput) || userInput == '') 
    {
        hint.textContent = 'Invalid Number Provide'
    }
    if (userInput >= 1 && userInput <= 10) {
        //play
        if (computerNumber > userInput) {
            hint.textContent = 'You guess the lower number'
        }
        if (computerNumber < userInput) {
            hint.textContent = 'You guess the higher number'
        }
        if (computerNumber == userInput) {
            hint.textContent = 'You guess correct Number'
            document.querySelector('.play-again-panel').classList.remove('hide');
            document.querySelector('.game-Panel').classList.add('hide')
            document.querySelector('.result').textContent = `You guess the correct number. It was ${computerNumber}`
        }
    }
    else {
        hint.textContent = 'Insert number from 1 to 10'
    }

})
function getNumber() {
    return Math.ceil(Math.random() * 10);
}
document.querySelector('.btnPlayAgain').addEventListener('click', () => {
    window.location.reload();
})



