//1. Boolean
//2. String
//3. Array
//4. Array
//5. Object
//6. Object

//TAKE IT EASY
const rainbow = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

console.log(rainbow[4]);


const jorge = {
  favoriteFood: "pizza",
  hobby: "basketball",
  currentCity: "Dallas",
  favoriteDatatype: "Objects",
}

console.log(jorge["hobby"]);


//CRAZY OBJECT
const crazyObject = {
  taco: [{meat: 'steak',
         cheese: ['panela', 'queso', 'chihuahua']},
         {meat: 'chicken',
          salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]},
        ],
  larry: {
    nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
    quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
    characters: [{
      name: "Jeff",
      occupation: "manager"
    },
    {
      name: "funkhauser",
      occupation: "tv dude"
    },
    {
      name: "susie",
      occupation: "jeffs wife",
      favourtieHobby: "Swearing at Larry and Jeff"
    },
    ]
  }
}

console.log(crazyObject.taco[1].salsa[5]);

console.log(crazyObject.larry.quotes[0]);

console.log(crazyObject.larry.characters[2].favourtieHobby);

console.log(crazyObject.larry.nicknames[1]);

console.log(crazyObject.larry.characters[1]);

//Object-ception
const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}

inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = null;

console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);
