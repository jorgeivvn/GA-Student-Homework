const express = require('express');
const router = express.Router();
const lessonsArray = require('../models/lessons');
const bodyParser = require('body-parser')

const sneakersArray = require('../models/sneakers');

const urlencodedParser = bodyParser.urlencoded({ extended: false });

router.get('/lessons', function(req, res){
  res.render('lessons/index', {lessonsArray: lessonsArray});
});

router.get('/sneakers', function(req, res){
  res.render('sneakers/index', {sneakersArray: sneakersArray});
});

router.get('/sneakers/:id', function(req, res){
	for (let i = 0; i < sneakersArray.length; i++) {
		if (sneakersArray[i].id == req.params.id) {
	      res.render('sneakers/show', {sneakers: sneakersArray[i]});
		}
	}
});

// router.post('/sneakers', urlencodedParser, function(req, res) {
// 	sneakersArray.push(req.body);
// 	res.redirect('/sneakers');
// })

module.exports = router;
