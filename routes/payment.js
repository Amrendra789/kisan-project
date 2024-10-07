const express = require('express');
const router = express.Router();
const Payment = require('../models/payment');

router.post('/payment', (req, res) => {
  const {
      fullName,
      email,
      address,
      city,
      state,
      zip,
      cardNumber,
      expMonth,
      expYear,
      cvv,
      upiId
  } = req.body;

  const newPayment = new Payment({
      fullName,
      email,
      address,
      city,
      state,
      zip,
      cardNumber,
      expMonth,
      expYear,
      cvv,
      upiId
  });

  newPayment.save()
    .then(payment => {
        console.log('Payment saved successfully:', payment);
        res.status(200).send('Payment details saved successfully');
    })
    .catch(err => {
        console.error(err);
        res.status(500).send('Error saving payment details');
  });
});

module.exports = router;
