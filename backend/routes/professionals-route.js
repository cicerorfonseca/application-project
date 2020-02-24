const express = require('express');
const { check } = require('express-validator');

const professionalsController = require('../controllers/professionals-controller');

const router = express.Router();

// filter HTTP request methods
router.post('/signup', 
    [
        check('fullName')
            .not()
            .isEmpty(),
        check('email')
            .normalizeEmail() // email CamelCase and other adjusts
            .isEmail(), // email validation
        check('password').isLength({ min: 6 })
    ],
    professionalsController.signUp);
router.post('/login',
    [
        check('email')
            .normalizeEmail() // email CamelCase and other adjusts
            .isEmail(), // email validation
        check('password')
            .not()
            .isEmpty()
    ],
    professionalsController.logIn);

router.get('/', professionalsController.getProfessionals);
router.get('/:cat', professionalsController.getProfessionalsByCategory);

module.exports = router;