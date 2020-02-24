const express = require('express');
const { check } = require('express-validator');

const servicesController = require('../controllers/services-controller');
const checkAuth = require('../middleware/check-auth');

const router = express.Router();

// filter HTTP request methods

//router.use(checkAuth);

router
    .route('/')

    .get(servicesController.getServices)
    .post(servicesController.createService);

router
    .route('/:sid')

    .get(servicesController.getServiceById)
    .patch(servicesController.updateService)
    .delete(servicesController.deleteService);

router.get('/professional/:sid', servicesController.getServicesByProfessionalId);

module.exports = router;