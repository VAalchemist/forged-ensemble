const mongoose = require('mongoose');
const { Schema } = mongoose;



const beatSchema = new Schema({
  beat: {
    type: String,
    required: true
  },
  startTime: {
    type: Number,
    required: true
  },
  userId: {
    type: String,
    required: true
  }
});

const Beats = mongoose.model('Beats', beatSchema);

module.exports = Beats;
