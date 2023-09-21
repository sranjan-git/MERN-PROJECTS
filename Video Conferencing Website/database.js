const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/video-conferencing', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
