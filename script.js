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

function playAgain() {
  var txt;
  var r = confirm("Play again?\nEither OK or Cancel.");
  if (r == true) {
    txt = "You pressed OK!";
  } else {
    txt = "You pressed Cancel!";
    playHistory=[0,0,0];
  }
  document.getElementById("demo2").innerHTML = txt;
}

function playGame() {
    var rps = prompt("Rock, Paper, or Scissors", "Pick your weapon!");
    rps = rps.toLowerCase();
    if (rps != "r" && rps != "p" && rps != "s") {
      alert("Please input a valid play.");
    } else if (rps == play) {
        alert("You tied!")
        playHistory[2]++        
    } else if (rps == "r") {
        if  (play == "p") { 
            alert("You lost")
            playHistory[1]++}
        if  (play == "s") { 
            alert("You won")
            playHistory[0]++}
    } else if (rps == "p") {
        if  (play == "r") { 
            alert("You won")
            playHistory[0]++}
        if  (play == "s") { 
            alert("You lost")
            playHistory[1]++}
    } else if (rps == "s") {
        if  (play == "r") { 
            alert("You lost")
            playHistory[1]++ }
        if  (play == "p") { 
            alert("You won")
            playHistory[0]++}
    }
    playAgain();
}





