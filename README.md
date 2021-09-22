# rockpaperscissors

Rock Paper Scissors web "game"

## PseudoCoding Exercise

**Important to use: prompt(), confirm(), and alert()

Page that loads script

* Randomly picks r p or s
    Math.floor(Math.random()*3)

* Prompt user  to enter text 

* logic as seen below**

* Tally wins/losses ties in array outside the function
* Prompt user to play again or exit

## Logic: 

* turn all characters lowercase 

* if user inputs a character that is not RPS or rps, return early and request a valid character

* if user inputs are equal, return tied counter+1 on tied attribute of playHistory function

    if user inputs r 
        if computer selects s
            console.log (winner)
            return counter+1 on winner attribute of playHistory function
        else 
            console.log(loser)
            return counter+1 on loser attribute of playHistory function
      else if user inputs p
        if computer selects s
            console.log(loser)
            return counter+1 on loser attribute of playHistory function
        else computer elects r
            console.log(winner)
            return counter+1 on winner attribute of playHistory function
     else 
        if computer selects p
            console.log(winner)
            return counter+1 on winner attribute of playHistory function
        else computer elects r
            console.log(loser)
            return counter+1 on loser attribute of playHistory function

