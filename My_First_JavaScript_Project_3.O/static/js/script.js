var allButtons = document.getElementsByTagName('button');
console.log('buttons =', allButtons); 

var copyAllButtons = [];
for (let i = 0; i < allButtons.length; i++) {
    copyAllButtons.push(allButtons[i]);
}

console.log(copyAllButtons.length);