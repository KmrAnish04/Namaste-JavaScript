
var allButtons = document.getElementsByTagName('button');
// console.log('buttons =', allButtons); 

var copyAllButtons = [];
for (let i = 0; i < allButtons.length; i++) {
    copyAllButtons.push(allButtons[i].classList[1]);
}

// console.log(copyAllButtons);


function buttonsColorChange(buttonsInfo) {
    if(buttonsInfo.value === 'red'){
        setColorRed();
    }
    else if(buttonsInfo.value === 'green'){
        setColorGreen();
    }
    else if(buttonsInfo.value === 'random'){
        setColorRandom();
    }
    else if(buttonsInfo.value === 'reset'){
        resetColors();
    }
}

function setColorRed() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');  
    }
}
function setColorGreen() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-good');  
    }
}
function setColorRandom() {
    var colors = {
        1: 'btn-primary',
        2: 'btn-danger',
        3: 'btn-neutral',
        4: 'btn-good',
    };

    var randomColor = colors[Math.floor(Math.random()*4) + 1];
    console.log(randomColor);    

    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(colors[Math.floor(Math.random()*4) + 1]);  
    }

}
function resetColors() {
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllButtons[i]);  
    }
}

