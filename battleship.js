var location1 = 3;
var location2 = 4;
var location3 = 5;

var guess;
var hits = 0;
var guesses = 0;

var isSunk = false;

while (isSunk == false) {
	guess = prompt("Ready, aim, fire! (enter a number from 0-6) : ");
	if (guess < 0 || guess > 6) {
		alert("Hey Asshole, I said a number between 0 & 6!");
	} else {
		guesses = guesses + 1;
		if (guess == location1) {
			hits = hits + 1;
			location1 = -1;
			alert("Hit! Your ma would be proud.");
		} else if (guess == location2) {
			hits = hits + 1;
			location2 = -1;
			alert("Hit! I'm sinkingggg!");
		} else if (guess == location3) {
			hits = hits + 1;
			location3 = -1;
			alert("Hit! Crap, you got me.");
		} else {
			alert("Ya missed kid, ya missed.😎")
		}
	if (hits == 3) {
		isSunk = true;
		alert("You sank my battleship!");
	}
}
}

var stats = "You took " + guesses + " guesses to sink the battleship, which means your shooting accuracy was " + (3/guesses)*100 + "%";
alert(stats);




