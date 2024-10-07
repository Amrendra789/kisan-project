const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  fullName: String,
  email: String,
  address: String,
  city: String,
  state: String,
  zip: Number,
  cardNumber: String,
  expMonth: String,
  expYear: String,
  cvv: Number,
  upiId: String
});

module.exports = mongoose.model('Payment', paymentSchema);
