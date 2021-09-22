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

console.log(compPlay);

function playGame() {
    var rps = prompt("Rock, Paper, or Scissors", "Pick your weapon!");
    rps = rps.toLowerCase();
    if (rps != "r" && rps != "p" && rps != "s") {
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


function playAgain() {
  var txt;
  var r = confirm("Play again?\nEither OK or Cancel.");
  if (r == true) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
  }
  document.getElementById("demo").innerHTML = txt;
}


// confirm() to check if user wants to play agian or to reset vars