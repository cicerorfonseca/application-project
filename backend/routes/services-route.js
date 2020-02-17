const express = require('express');

const servicesController = require('../controllers/services-controller');

const router = express.Router();

// filter HTTP request methods

// Get all services
router.get('/', servicesController.getServices);

router.get('/:sid', servicesController.getServiceById);

router.get('/professional/:sid', servicesController.getServiceByProfessionalId);

router.post('/', servicesController.createService);

router.patch('/:sid', servicesController.updateService);

router.delete('/:sid', servicesController.deleteService);

module.exports = router;