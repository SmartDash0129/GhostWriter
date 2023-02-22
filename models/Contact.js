const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  status: {
    type: Boolean,
    default: false
  },
  date: { 
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('contact', ContactSchema);
