
let gameResult = {
    'player': {'scoreSpan': '#player-result-span', 'div':'#player-div', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-result-span', 'div':'#dealer-div', 'score': 0},
}

const YOU = gameResult['player'];
const DEALER = gameResult['dealer'];

document.querySelector('#hit').addEventListener('click', alt);

function alt() {
    alert('hitted');
}