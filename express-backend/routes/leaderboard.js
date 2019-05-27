var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const Entry = require('../leaderboardEntry');

/* GET all leaderboard listings */
router.get('/', function(req, res, next){
  Entry.find()
  .exec()
  .then(entries => {
    res.status(200).json(entries);
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({
      error: err
    });
  });
});

/* POST leaderboard listing */
router.post("/", function(req, res, next){
  console.log(req.body);
  console.log(req.body.username);
  const entry = new Entry({
    _id: new mongoose.Types.ObjectId(),
    username: req.body.username,
    score: req.body.score
  });
  entry
  .save()
  .then(result => {
    console.log(result);
  })
  .catch(err => console.log(err));
  res.status(201).json({
    message: "Handling post request to leaderboard",
    createdEntry: entry
  })
});


module.exports = router;
