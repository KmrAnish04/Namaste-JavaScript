
function inputAge(){
    var birthYear = prompt("Enter your Birth Year...");
    var ageInDays = (2021 - birthYear) * 365;
    var h1 = document.createElement('h1');
    var resultText = document.createTextNode('You are' + ' ' + ageInDays + ' ' + 'days old.');
    h1.setAttribute('id', 'ageInDays');
    h1.appendChild(resultText);
    document.getElementById('flexbox-result').appendChild(h1);

    console.log(ageInDays);
}

function reset(){
    document.getElementById('ageInDays').remove();
}