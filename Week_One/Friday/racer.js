//Speedracer game:
//Create a "playing field"
//Set two "players" or objects, one above the other, on the left hand side of the screen
//See a finish line at the right end of the screen
//Move each player or object with a key stroke (Player 1 with 'right arrow' and Player 2 with 'r')
//Let the players know the race is over when one of them crosses finish line
//var mustang = getElementById('mustang');
var mustangLeft = 0;

function move(e) {
  if (e.keyCode == 39)
    mustangLeft +=5
    mustang.style.left = mustangLeft + 'px';
  }

document.onkeydown= move;

//key code fro r is 82
