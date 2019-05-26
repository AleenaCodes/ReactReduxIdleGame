var express = require('express');
var router = express.Router();

/* GET leaderboard listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');

  res.json([{
  	id: 1,
  	username: "username3"
  }, {
  	id: 2,
  	username: "username4"
  }]);
});

module.exports = router;
