// Easy Going
// Write a for loop that will log the numbers 1 through 20.

for (let i = 0; i <= 20; i++) {
  console.log(i);
}

// Get Even
// Write a for loop that will log only the even numbers in 0 through 200.

for (var i = 0; i <= 200; i++) {
  if (i%2 === 0) {
  console.log(i);
  }
}

// Excited Kitten COMMENTS: Got the first part, not the second part. FAILED MISERABLY.

for (var i = 1; i <= 20; i++) {
  console.log("Love me, pet me! HSSSSSS!");
}

 const catSays = ["...human...why you taking pictures of me?..", "..the catnip made me do it..", "why does the red dot always get away..."];
 for (var i = 0; i <= catSays.length; i++) {
     if(i%2 === 0) {
     console.log(catSays[Math.floor(Math.random() * catSays.length)])
   }
 }

 //Fizz Buzz COMMENTS: Couldn't get it to log "FizzBuzz".
 for (var i = 0; i <= 100; i++) {
   if (i%3 === 0)
     console.log("Fizz");
   else if (i%5 === 0)
     console.log("Buzz");
   else if ((i%3 === 0) && (i%5 === 0))
     console.log("FizzBuzz");
   else
   console.log(i);
 }

 //Getting to Know You
 const thom = ["Thom", 1000, "Christchurch"]
 const karolin = ["Karolin", 16, "New York"]
 const kristyn = ["Kristyn", 5, "Pittsburgh"]
 const matt = ["Matt H", 186, "Philadelphia"]

 //1.
 thom[0] = "Gameboy";
 //2.
 karolin[1] = 17;
 //3
 matt [2] = "Gotham City";
 //4
 kristyn[2] = "Brooklyn";

 //Yell at the Ninja Turtles COMMENTS: Couldn't figure this out fully, had to google for some type of answer. Even then though, couldn't get the code to work the way I want it to.

 var ninjaTurtles = ["Donatello", "Leonardo", "Raphael", "Michaelangelo"];
   for(var i = 0; i < ninjaTurtles.length; i++){
     ninjaTurtles[i] = ninjaTurtles[i].toUpperCase();
     console.log(ninjaTurtles);
 }

 //Return of the Closets COMMENTS: Couldn't complete, adding variable to multidimensional array and "Dress Us Up"
 const kristynsCloset = [
   "left shoe",
   "cowboy boots",
   "right sock",
   "GA hoodie",
   "green pants",
   "yellow knit hat",
   "marshmallow peeps"
 ];

//This will add candy corn stash at the end of the list of kristynsCloset
 kristynsCloset[7] = "candy corn stash";

//These two will add to end of list as well, more common is push method
kirstynsCloset[kristynsCloset.length] = "candy corn stash";

kristynsCloset.push("camo gear");

 // Thom's closet is more complicated. Check out this nested data structure!!
 const thomsCloset = [
   [
     // These are Thom's shirts
     "grey button-up",
     "dark grey button-up",
     "light blue button-up",
     "blue button-up",
   ],[
     // These are Thom's pants
     "grey jeans",
     "jeans",
     "PJs"
   ],[
     // Thom's accessories
     "wool mittens",
     "wool scarf",
     "raybans"
   ]
 ];
//This would return dark grey button-up
 thomsCloset[0][1];
//Answers from Alex for problem
let kristynsShoe = kristynsCloset [0];
thomsCLoset[2].push.kirstynsShoe);

//These are my answers
 kristynsCloset.shift();

 var kristynsShoe=("left shoe");

 thomsCloset[2][4] = kristynsShoe

 // Dirty Laundry

 for (var i = 0; i < kristynsCloset.length; i++) {
   console.log("Whirr now washing " + kristynsCloset[i]);
 }

 // Inventory COMMENT: Didn't finish.
 //
 // Thom wants to do inventory on his closet. Using bracket notation, log the arrays containing all of Thom's shirts, pants, and accessories.


//  Multiples of 3 and 5 COMMENTS:
//
// Yes, you might have tackled this earlier, but try it again (don't look back at your other code)
//
// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.
//
// You just solved Project Euler problem 1!
