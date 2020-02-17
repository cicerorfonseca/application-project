const express = require('express');

const servicesController = require('../controllers/services-controller');

const router = express.Router();

// filter HTTP request methods
router.get('/:sid', servicesController.getServiceById);

router.get('/user/:');

router.post('/', servicesController.createService);

router.patch('/:sid', servicesController.updateService);

router.delete('/:sid', servicesController.deleteService);

module.exports = router;