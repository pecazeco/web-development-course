var random1 = Math.ceil( 6 * Math.random() );
var random2 = Math.ceil( 6 * Math.random() );

document.querySelector(".img1").setAttribute("src", "images/dice" + random1 + ".png");
document.querySelector(".img2").setAttribute("src", "images/dice" + random2 + ".png")

if(random1>random2){
    document.querySelector("h1").textContent = "🚩 Player 1 wins!";
}

else if(random2>random1){
    document.querySelector("h1").textContent = "Player 2 wins! 🚩";
}

else{
    document.querySelector("h1").textContent = "It's a draw!";
}
