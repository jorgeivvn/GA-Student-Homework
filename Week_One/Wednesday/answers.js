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
