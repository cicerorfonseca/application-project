const express = require('express');

const servicesController = require('../controllers/services-controller');

const router = express.Router();

// filter HTTP request methods

router
    .route('/')

    .get(servicesController.getServices)
    .post(servicesController.createService);

router
    .route('/:sid')

    .get(servicesController.getServiceById)
    .patch(servicesController.updateService)
    .delete(servicesController.deleteService);

router.get('/professional/:sid', servicesController.getServiceByProfessionalId);

module.exports = router;