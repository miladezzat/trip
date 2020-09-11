const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookingSchema = new Schema({
  full_name: {
    type: String
  },
  phone: {
    type: String,
  },
  booking_date: {
    type: String,
  },
  duration: {
    type: String,
  },
  num_persons: {
    type: String,
  },
});


module.exports = mongoose.model('Booking', bookingSchema);
