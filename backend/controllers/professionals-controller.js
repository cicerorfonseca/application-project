const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const HttpError = require('../models/http-error');
const Professional = require('../models/professional');

const signUp = async (req, res, next) => {

    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        return next(new HttpError('Invalid inputs passed, please check your data.', 442));
    }

    // Get the request values
    const { fullName,
            category,
            description,
            selfEmployed,
            email,
            password,
            phone,
            logo } = req.body; // (short for: const name = req.body.name)
    
    let existingProfessional;
    
    try {
        existingProfessional = await Professional.findOne({ email: email });
    } catch (err) {
        return next(new HttpError('Signing up failed, please try again.', 500));
    }

    if (existingProfessional) {
        return next(new HttpError('Professional exists already, please login instead.', 422));
    }

    let hashedPassword;

    try {
        // requests from the frontend should be https for safety reasons
        hashedPassword = await bcrypt.hash(password, 12);
    } catch (err) {
        return next(new HttpError('Could not create professional, please try again', 500));
    }
    
    // Create a instance of the Professional model
    const createdProfessional = new Professional({
        fullName,
        category,
        description,
        selfEmployed,
        email,
        password: hashedPassword,
        phone,
        logo,
        rating: Math.floor(Math.random() * (5 - 1 + 0)) + 0
    });

    try {
        await createdProfessional.save(); //save the Document (row) into the Collection (table) | NoSQL x SQL    
    } catch (err) {
        return next(new HttpError('Signing Up failed, please try again.', 500));
    }

    let token;
    try {
        token = jwt.sign(
            { professionalId: createdProfessional.id, email: createdProfessional.email },
            'mr_services_pk',
            { expiresIn: '1h' }
        );
    } catch (err) {
        return next(new HttpError('Signing Up failed, please try again.', 500));
    }

    res.status(201).json({ professionalId: createdProfessional.email, email: createdProfessional.email, token: token });
};

const logIn = async (req, res, next) => {

    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        return next(new HttpError('Invalid inputs passed, please check your data.', 442));
    }

    // Get the request values
    const { email, password } = req.body; // (short for: const email = req.body.email)

    let existingProfessional;
    
    try {
        existingProfessional = await Professional.findOne({ email: email });
    } catch (err) {
        return next(new HttpError('Logging in failed, please try again.', 500));
    }

    if (!existingProfessional) {
        return next(new HttpError('Invalid credential, could not log you in.', 401));
    }

    let isValidPassword;

    try {
        isValidPassword = await bcrypt.compare(password, existingProfessional.password);
    } catch (err) {
        return next(new HttpError('Could not log you in, please check your credentials and try again.', 500));
    }

    if (!isValidPassword) {
        return next(new HttpError('Invalid credential, could not log you in.', 401));
    }

    let token;
    try {
        token = jwt.sign(
            { professionalId: existingProfessional.id, email: existingProfessional.email },
            'mr_services_pk',
            { expiresIn: '1h' }
        );
    } catch (err) {
        return next(new HttpError('Logging in failed, please try again.', 500));
    }

    res.json({ professionalId: existingProfessional.email, email: existingProfessional.email, token: token });
}

const getProfessionals = async (req, res, next) => {

    let professionals;

    try {
        professionals = await Professional.find({}, '-password');
    } catch (err) {
        return next(new HttpError('Fetching professionals failed, please try again later.', 500));
    }
    res.json(professionals.map(professional => professional.toObject({getters: true})));    
}

const getProfessionalsByCategory = async (req, res, next) => {
    
    const professionalCategory = req.params.cat;

    let professionals;

    try {
        professionals = await Professional.find({category: professionalCategory}, '-password');    
    } catch (err) {
        return next(new HttpError('Something went wrong, could not find a professional category', 500));
    }

    if (!professionals) {
        return next(new HttpError('Could not find a professional for the category', 404));
    }

    res.json(professionals.map(professional => professional.toObject({getters: true})));
};

exports.signUp = signUp;
exports.logIn = logIn;
exports.getProfessionals = getProfessionals;
exports.getProfessionalsByCategory = getProfessionalsByCategory;