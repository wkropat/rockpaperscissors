// var person = prompt("Rock, Paper, or Scissors", "Pick your weapon!");

var playHistory = [0,0,0];
var compPlay = Math.floor(Math.random()*3);
var play = "";

if (compPlay == 0) {
    play = "r";
} else if (compPlay == 1) {
    play = "p";
} else {
    play = "s";
}

console.log(play);

function playGame() {
    var rps = prompt("Rock, Paper, or Scissors", "Pick your weapon!");
    rps = rps.toLowerCase();
    if (rps != "r" && rps != "p" && rps != "s" && rps != null) {
      document.getElementById("demo").innerHTML =
      "Please input a valid play.";
      return;
    } else if (rps == play) {
        console.log("You tied!")
        playHistory[2]++        
    } else if (rps == "r") {
        if  (play == "p") { 
            console.log("You lost")
            playHistory[1]++}
        if  (play == "s") { 
            console.log("You won")
            playHistory[0]++}
    } else if (rps == "p") {
        if  (play == "r") { 
            console.log("You won")
            playHistory[0]++}
        if  (play == "s") { 
            console.log("You lost")
            playHistory[1]++}
    } else if (rps == "s") {
        if  (play == "r") { 
            console.log("You lost")
            playHistory[1]++ }
        if  (play == "p") { 
            console.log("You won")
            playHistory[0]++}
    }
}

// confirm() to check if user wants to play agian or to reset vars