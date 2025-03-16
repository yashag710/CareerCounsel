const mongoose = require('mongoose');

const careerSchema = new mongoose.Schema({
  name: String,
  analysis: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("career" , careerSchema);
