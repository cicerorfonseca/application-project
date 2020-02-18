const express = require('express');

const professionalsController = require('../controllers/professionals-controller');

const router = express.Router();

// filter HTTP request methods
router
    .route('/')

    .get(professionalsController.getProfessionals)
    .post(professionalsController.createProfessional);

router.get('/:cat', professionalsController.getProfessionalsByCategory);

//router.post('/login');

module.exports = router;