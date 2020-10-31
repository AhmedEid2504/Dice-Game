
var n1 = Math.floor(Math.random() *6) +  1 ;
var randomDiceImage = "images/dice" + n1 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);


var n2 = Math.floor(Math.random() *6) +  1 ;
var randomDiceImage = "images/dice" + n2 + ".png";

var image1 = document.querySelectorAll("img")[1];
image1.setAttribute("src", randomDiceImage);

var title = document.querySelector("h1");

if (n1 > n2 ){
  document.querySelector("h1").innerHTML = "player 1 wins";
}
else if (n1 < n2) {
document.querySelector("h1").innerHTML = "player 2 wins";
}
else {
document.querySelector("h1").innerHTML = "Draw";  
}
