const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Pacient = mongoose.model('Pacient');

const router = express.Router();

router.use(requireAuth);

router.get('/pacients', async (req, res) => {
  const pacients = await Pacient.find({ userId: req.user._id });

  res.send(pacients);
});

router.post('/pacients', async (req, res) => {
  const { fullName, dateOfReport, clinicPetromed, nrSAP } = req.body; //To add the remaining atributes

  try {
    const pacient = new Pacient({ userId : req.user._id, fullName, dateOfReport, clinicPetromed, nrSAP }); //To add the remaining atributes
    await pacient.save();
    res.send(pacient);
  } catch (err) {
    res.status(422).send({ error: err.message });
  }
});

module.exports = router;
