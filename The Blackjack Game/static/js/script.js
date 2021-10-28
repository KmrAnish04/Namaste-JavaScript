
let gameResult = {
    'player': {'scoreSpan': '#player-result-span', 'div':'#player-div', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-result-span', 'div':'#dealer-div', 'score': 0},
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10' , 'A', 'K', 'Q', 'J'],
    'cardsScores': {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'A': [1,11], 'K': 10, 'Q': 10, 'J': 10},
}

const YOU = gameResult['player'];
const DEALER = gameResult['dealer'];

const hitSound = new Audio('static/sounds/swish.m4a');

document.querySelector('#hit').addEventListener('click', bjHit);
document.querySelector('#deal').addEventListener('click', bjDeal);

function bjHit() {
    // showCards(DEALER);  
    // showCards(YOU, pickRandomCards()); 
    updatecardsScore(pickRandomCards(), YOU); 
}

function showCards(activePlayer, cardToBeShown) {
    let cardImg = document.createElement('img');
    cardImg.src = `static/images/${cardToBeShown}.png`;
    cardImg.setAttribute('style', 'width: 90px; height: 120px; margin:5px')
    document.querySelector(activePlayer['div']).appendChild(cardImg);
    hitSound.play();
}

function bjDeal() {
    let playerImgs = document.querySelector('#player-div').querySelectorAll('img');
    let dealerImgs = document.querySelector('#dealer-div').querySelectorAll('img');
    
    for (let i = 0; i < playerImgs.length; i++) {
        playerImgs[i].remove();        
    }
    for (let i = 0; i < dealerImgs.length; i++) {
        dealerImgs[i].remove();        
    }
}

function pickRandomCards() {
    let card = gameResult['cards'][Math.floor(Math.random() * 13)];
    console.log('chosen random = ', card);
    return card;
}

function updatecardsScore(card, activePlayer) {
    let cardScore = gameResult['cardsScores'].card;
    console.log(cardScore);
}