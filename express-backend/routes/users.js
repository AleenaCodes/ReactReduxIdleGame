var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');

  res.json([{
  	id: 1,
  	username: "username1",
    score: 29572
  }, {
  	id: 2,
  	username: "username2",
    score: 138592
  }]);
});

module.exports = router;
