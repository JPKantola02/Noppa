function rollDice() {
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    var imageName = randomNumber + ".png";
    document.getElementById("diceImage").src = "./img/" + imageName;
    document.getElementById("diceImage").alt = "Dice " + randomNumber;
}