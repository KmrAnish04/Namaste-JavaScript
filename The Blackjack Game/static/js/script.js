
let gameResult = {
    'player': {'scoreSpan': '#player-result-span', 'div':'#player-div', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-result-span', 'div':'#dealer-div', 'score': 0},
    'cards': ['2', '3', '4', '5', '6', '7', '8', '9', '10' , 'A', 'K', 'Q', 'J'],
    'cardsScores': {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'A': [1,11], 'K': 10, 'Q': 10, 'J': 10},
}

const YOU = gameResult['player'];
const DEALER = gameResult['dealer'];

const hitSound = new Audio('static/sounds/swish.m4a');

document.querySelector('#hit').addEventListener('click', BlackjackHit);
document.querySelector('#stand').addEventListener('click', BlackjackStand);
document.querySelector('#deal').addEventListener('click', BlackjackDeal);

function BlackjackHit() {
    // showCards(DEALER);  
    let cardpicked = pickRandomCards();
    showCards(YOU, cardpicked); 
    updateCardsScore(cardpicked, YOU);
    updateScoreFrontend(YOU);
}

function BlackjackDeal() {
    let playerImgs = document.querySelector('#player-div').querySelectorAll('img');
    let dealerImgs = document.querySelector('#dealer-div').querySelectorAll('img');
    
    for (let i = 0; i < playerImgs.length; i++) {
        playerImgs[i].remove();        
    }
    for (let i = 0; i < dealerImgs.length; i++) {
        dealerImgs[i].remove();        
    }

    YOU['score'] = 0;
    DEALER['score'] = 0;
    document.querySelector(YOU['scoreSpan']).textContent = 0;
    document.querySelector(YOU['scoreSpan']).style.color = 'white';
    document.querySelector(DEALER['scoreSpan']).textContent = 0;
    document.querySelector(DEALER['scoreSpan']).style.color = 'white';
}

function BlackjackStand() {
    let dealerCard = pickRandomCards();
    showCards(DEALER, dealerCard);
    updateCardsScore(dealerCard, DEALER);
    updateScoreFrontend(DEALER);
}


function showCards(activePlayer, cardToBeShown) {
    if (activePlayer['score'] <= 21) {
        let cardImg = document.createElement('img');
        cardImg.src = `static/images/${cardToBeShown}.png`;
        cardImg.setAttribute('style', 'width: 90px; height: 120px; margin:5px')
        document.querySelector(activePlayer['div']).appendChild(cardImg);
        hitSound.play();
    }
}


function pickRandomCards() {
    let card = gameResult['cards'][Math.floor(Math.random() * 13)];
    console.log('chosen random = ', card);
    return card;
}

function updateCardsScore(card, activePlayer) {
    if (card === 'A') {
        if (activePlayer['score'] + gameResult['cardsScores'][card][1] <= 21) {
            activePlayer['score'] += gameResult['cardsScores'][card][1];
        }
        else{
            activePlayer['score'] += gameResult['cardsScores'][card][0];
        }
    }
    else{ 
        activePlayer['score'] += gameResult['cardsScores'][card];
        console.log(card, activePlayer['score']);
    }
}

function updateScoreFrontend(activePlayer) {
    if (activePlayer['score'] > 21) {
        document.querySelector(activePlayer['scoreSpan']).textContent = 'Bust';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }
    else{
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }

}