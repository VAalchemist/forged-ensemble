const mongoose = require('mongoose');

const { Schema } = mongoose;

const filesSchema = new Schema({

    fileName: {
        type: String,
        required: true,
        trim: true
      },
      url: {
          type: String,
          required: true
      },
      userId:{
          type: String,
          required: true
      },
      artist: {
          type: String,
          required: true
      }

});


const Files = mongoose.model('Files', filesSchema);

module.exports = Files;