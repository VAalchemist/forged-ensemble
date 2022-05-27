const mongoose = require('mongoose');
const { Schema } = mongoose;



const beatSchema = new Schema({
  note: {
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

const Beats = mongoose.model('Beat', beatSchema);

module.exports = Beats;
