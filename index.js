var randomNumber1 = Math.floor(Math.random() * 6) +1;
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomDiceImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


//selecting the play again button component

const btn = document.querySelector(".play-again");

btn.addEventListener("click",()=>{
    window.location.reload()
})


if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🏳️‍🌈Player 1Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="🏳️‍🌈Player 2Wins!";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}