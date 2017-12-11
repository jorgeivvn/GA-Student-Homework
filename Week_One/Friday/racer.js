//Speedracer game:
//Create a "playing field"
//Set two "players" or objects, one above the other, on the left hand side of the screen
//See a finish line at the right end of the screen
//Move each player or object with a key stroke (Player 1 with 'right arrow' and Player 2 with 'r')
//Let the players know the race is over when one of them crosses finish line
// let mustang = getElementById('mustang');
//  let camaro = getElementById('camaro');

//NOTES: Player 1, and Player 2 both work if function is run individually, but only Player 2 moves when both are run at the same time. Can't figure out a way for both of them to run successfully at same time. 

//Red Player 1
let mustangLeft = 0;

function move(stang) {
  if (stang.keyCode == 39)
    mustangLeft +=20
    document.getElementById("mustang").style.left = mustangLeft + 'px';
  }

document.onkeydown= move;



// //Blue Player 2
let camaroLeft = 0;

function accelerate(camaro) {
  if (camaro.keyCode == 82)
  camaroLeft +=20
  document.getElementById("camaro").style.left = camaroLeft + 'px';
}

document.onkeydown= accelerate;

//Alert when one of racers crosses finish line
