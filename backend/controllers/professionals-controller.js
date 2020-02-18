const HttpError = require('../models/http-error');
const Professional = require('../models/professional');

const { validationResult } = require('express-validator');

const createProfessional = async (req, res, next) => {

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
            phone,
            rating,
            logo } = req.body; // (short for: const name = req.body.name)
    
    // Create a instance of the Service model
    const createdProfessional = new Professional({
        fullName,
        category,
        description,
        selfEmployed,
        email,
        phone,
        rating,
        logo
    });

    try {
        await createdProfessional.save(); //save the Document (row) into the Collection (table) | NoSQL x SQL    
    } catch (err) {
        const error = new HttpError('Creating professional failed, please try again.', 500);
        return next(error);
    }

    res.status(201).json({professional: createdProfessional});
};

const getProfessionals = async (req, res, next) => {

    let professionals;

    try {
        professionals = await Professional.find();
    } catch (err) {
        const error = new HttpError('Fetching professionals failed, please try again later.', 500);
        return next(error);
    }
    res.json({professionals: professionals.map(professional => professional.toObject({getters: true}))});    
}

const getProfessionalsByCategory = async (req, res, next) => {
    
    const professionalCategory = req.params.cat;

    let professionals;

    try {
        professionals = await Professional.find({category: professionalCategory});    
    } catch (err) {
        const error = new HttpError('Something went wrong, could not find a professional category', 500);
        return next(error);
    }

    if (!professionals) {
        const error = new HttpError('Could not find a professional for the category', 404);
        return next(error);
    }

    res.json({professionals: professionals.map(professional => professional.toObject({getters: true}))});
};

exports.createProfessional = createProfessional;
exports.getProfessionals = getProfessionals;
exports.getProfessionalsByCategory = getProfessionalsByCategory;