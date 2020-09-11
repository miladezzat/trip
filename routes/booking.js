var express = require('express');
var router = express.Router();

const bookingModel = require("../models/booking");

router.post('/', async (req, res, next) => {
  console.log(req.body)
  const newBooking = new bookingModel(req.body);
  await newBooking.save();
  res.redirect('/');
});

module.exports = router;
