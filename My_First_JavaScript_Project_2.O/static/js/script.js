function rpsGame(userChoice){
    var playerChoice, botChoice;

    botChoice = numToBotChoice(randToBotChoice())
    console.log(botChoice);

}

function randToBotChoice() {
    return Math.floor(Math.random() * 3);
}

function numToBotChoice(num) {
    var botChoices = ['rock', 'paper', 'scissor'];
    return botChoices[num]; 
}