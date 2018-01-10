//pseudo-code for Rest-ful routes
// Get all Sneakers "/sneakers"
// Get Sneakers by Id "/sneakers/:id"
// Get Athletes "/athletes"
// Get Athletes by Id "/athletes/:id"
//Get all Sneakers by Athletes "/athletes/:id/sneakers"
//Get Sneaker by Athlete "athletes/:id/sneakers/:id"

const express = require('express'); //from documentation: express is function
const app = express();//app is an object

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// app.get('/', function(req, res, next) {
//   // Handle the get for this route
// });
//
// app.post('/', function(req, res, next) {
//  // Handle the post for this route
// });

const athletes = [
    {id: 1, name: "Michael Jordan"},
    {id: 2, name: "Lebron James"},
    {id: 3, name: "Russel Westbrook"}
  ];

  const sneakers = [
    {id: 1, brand: "ADIDAS", name: "Human Race"},
    {id: 2, brand: "ADIDAS", name: "Yeezy Boost"},
    {id: 3, brand: "NIKE", name: "Air Jordan III"}
  ];

app.get('/sneakers', (request, response) => {
  response.send(sneakers);
});

app.get('/sneakers/:id', (request, response) => {
  // if (sneakers[request.params.id - 1] !== undefined) {
    response.send(sneakers[request.params.id - 1]);
  // } else {
  //   response.send("404, Sneaker Not Found");
  // // }
});

app.post('/sneakers/:id', function(req, res, next) {
 // Handle the post for this route
});

app.get('/athletes', (request, response) => {
  response.send(athletes);
});

app.get('/athletes/:id', (request, response) => {
  for (let i=0; i < athletes.length; i++) {
    if (athletes[i].id == request.params.id) {
      response.send(athletes[i]);
    }
  }
  response.send("404, Athlete Not Found");
});

// app.get('/athletes/:id', (request, response) => {
//   response.send('Here is Michael Jordan');
// });

app.get('/athletes/:id/sneakers', (request,response) => {
  response.send('Here are all of Michael Jordan sneakers');
});

app.get('/athletes/:id/sneakers/:id', (request, response) => {
  response.send('Here is an Air Jordan XI by Michael Jordan');
});

app.listen(3000, ()=>{
    console.log("I am listening");
});
