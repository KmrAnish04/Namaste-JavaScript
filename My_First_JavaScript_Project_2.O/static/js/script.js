function rpsGame(userChoice){
    var playerChoice, botChoice, result;

    playerChoice = userChoice.id;
    botChoice = numToBotChoice(randToBotChoice());
    console.log("Bot Choice: ", botChoice);
    console.log("Player Choice: ", playerChoice);
    result = findWinner(playerChoice, botChoice);
    console.log(result);

    message = declareWinner(result);
    console.log(message);

}

function randToBotChoice() {
    return Math.floor(Math.random() * 3);
}

function numToBotChoice(num) {
    var botChoices = ['rock', 'paper', 'scissor'];
    return botChoices[num]; 
}

function findWinner(playerChoice, botChoice) {
    var rpsDb = {
        'rock': {'rock': 0.5, 'paper': 0, 'scissor': 1},
        'paper': {'rock': 1, 'paper': 0.5, 'scissor': 0},
        'scissor': {'rock': 0, 'paper': 1, 'scissor': 0.5},
    };
    
    var playerScore = rpsDb[playerChoice][botChoice];
    var botScore = rpsDb[botChoice][playerChoice];

    return [playerScore, botScore];
}

function declareWinner([playerChoice, botChoice]) {
    if (playerChoice == 0) {
        return {'message': 'You Lost!', 'color': 'red'};
    }
    else if(playerChoice == 0.5){
        return {'message': 'Game Tied!', 'color': 'yellow'};
    }
    else{
        return {'message': 'You Won!', 'color': 'green'};
    }
}