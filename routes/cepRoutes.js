const express = require('express');
const router = express.Router();
const { getStreetNameByCep } = require('../controllers/cepController');
const validateCep = require('../middleware/validateCep');

router.get('/:cep', validateCep, getStreetNameByCep);

module.exports = router;
