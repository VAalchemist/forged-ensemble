const mongoose = require('mongoose');

const { Schema } = mongoose;

const userSchema = new Schema({
  firstName: {
      type: String,
      required: true,
      trim: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;