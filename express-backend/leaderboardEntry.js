const mongoose = require('mongoose');

const leaderboardEntrySchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  username: String,
  score: Number
});

module.exports = mongoose.model('Entry', leaderboardEntrySchema);
