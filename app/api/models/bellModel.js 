const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bellSchema = new Schema({
  
  name: {
    type: String,
    required: "Le titre est requis"
  },
  lien: {
    type: String,
    required: "Le lien est requis"
  },
  note: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Bell', bellSchema);
