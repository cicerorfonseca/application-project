const express = require('express');

const professionalsController = require('../controllers/professionals-controller');

const router = express.Router();

// filter HTTP request methods
router.get('/', professionalsController.getProfessionals);

router.post('/', professionalsController.createProfessional);

//router.post('/login');

module.exports = router;