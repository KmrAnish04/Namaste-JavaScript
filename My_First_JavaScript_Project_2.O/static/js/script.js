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

    fontendStuff(playerChoice, botChoice, message);

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

function fontendStuff(playerChoiceImg, botChoiceImg, resultMsg) {
    
    var imgDb = {
        'rock': document.getElementById('rock').src,
        'paper': document.getElementById('paper').src,
        'scissor': document.getElementById('scissor').src,
    }

    console.log(imgDb['rock']);

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var playerDiv = document.createElement('div');
    var botDiv = document.createElement('div');
    var messageDiv = document.createElement('div');

    playerDiv.innerHTML = "<img src='" + imgDb[playerChoiceImg] +"' width=min-content height=100px style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>";

    messageDiv.innerHTML = "<h1 style='color:" + resultMsg['color'] +"; font-size: 60px; padding: 30px;' >" + resultMsg['message'] + "</h1>"

    botDiv.innerHTML = "<img src='" + imgDb[botChoiceImg] +"' width=min-content height=100px style='box-shadow: 0px 10px 50px rgba(243, 0, 0, 0.8);'>";

    document.getElementById('flexbox-rps').appendChild(playerDiv);
    document.getElementById('flexbox-rps').appendChild(messageDiv);
    document.getElementById('flexbox-rps').appendChild(botDiv);
}


