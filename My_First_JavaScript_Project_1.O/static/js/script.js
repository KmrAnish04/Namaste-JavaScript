function generateCats(){
    var img = document.createElement('img')
    var div = document.getElementById('cats-div');
    img.src = "https://api.thecatapi.com/api/images/get?format=src&type=gif&size=small";
    img.setAttribute('style', 'width: min-content; height: 100px;')
    div.appendChild(img);
}