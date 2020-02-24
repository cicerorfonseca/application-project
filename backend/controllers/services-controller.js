const { validationResult } = require('express-validator');

const HttpError = require('../models/http-error');
const Service = require('../models/service');



const getServices = async (req, res, next) => {

    let services;

    try {
        services = await Service.find();
    } catch (err) {
        return next(new HttpError('Fetching services failed, please try again later.', 500));
    }
    res.json({services: services.map(service => service.toObject({getters: true}))});    
}

const getServiceById = async (req, res, next) => {
    
    const serviceId = req.params.sid; // {sid: 's1'}
    let service;

    try {
        service = await Service.findById(serviceId);    
    } catch (err) {
        return next(new HttpError('Something went wrong, could not find a service', 500));
    }

    if (!service) {
        return next(new HttpError('Could not find a service for the provided id', 404));
    }

    res.json({ service: service.toObject( {getters: true} ) }); // => {service} => {service:service}
};

const getServicesByProfessionalId = async (req, res, next) => {
    const professionalId = req.params.sid;

    let services;

    try {
        services = await Service.find({professionals: professionalId});    
    } catch (err) {
        return next(new HttpError('Fetching services failed, please try again later', 500));
    }    

    if (!services || services.length === 0) {
        return next(new HttpError('Could not find services for the provided service id.', 404));
    }

    res.json({ services: services.map(service => service.toObject({ getters: true })) });
}

const createService = async (req, res, next) => {

    const errors = validationResult(req);
    
    if(!errors.isEmpty()){
        return next(new HttpError('Invalid inputs passed, please check your data.', 442));
    }

    // Get the request values
    const { postalCode,
            professionalCategory,
            serviceType,
            serviceDetail,
            servicePriority,
            firstName,
            lastName,
            phoneNumber,
            emailAddress,
            professionals } = req.body; // (short for: const postalCode = req.body.postalCode)
    
    // Create a instance of the Service model
    const createdService = new Service({
        postalCode,
        professionalCategory,
        serviceType,
        serviceDetail,
        servicePriority,
        firstName,
        lastName,
        phoneNumber,
        emailAddress,
        professionals
    });

    try {
        await createdService.save(); //save the Document (row) into the Collection (table) | NoSQL x SQL    
    } catch (err) {
        return next(new HttpError('Creating service failed, please try again.', 500));
    }

    res.status(201).json({service: createdService});
};

const updateService = async (req, res, next) => {

    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return next(new HttpError('Invalid inputs passed, please check your data.', 442));
    }

    // Get the request values
    const { postalCode,
        professionalCategory,
        serviceType,
        serviceDetail,
        servicePriority,
        firstName,
        lastName,
        phoneNumber,
        emailAddress,
        professionals } = req.body; // (short for: const postalCode = req.body.postalCode)
    
    const serviceId = req.params.sid; // Getting the id :sid from the url

    let service;
    
    try {
        service = await Service.findById(serviceId);
    } catch (err) {
        return next(new HttpError('Something went wrong, could not update service (1)', 500));
    }

    service.postalCode = postalCode;
    service.professionalCategory = professionalCategory;
    service.serviceType = serviceType;
    service.serviceDetail = serviceDetail;
    service.servicePriority = servicePriority;
    service.firstName = firstName;
    service.lastName = lastName;
    service.phoneNumber = phoneNumber;
    service.emailAddress = emailAddress;
    service.professionals = professionals;    
    
    try {
        await service.save();
    } catch (err) {
        return next(new HttpError('Something went wrong, could not update service (2)', 500));
    }

    res.status(200).json({service: service.toObject({ getters: true })}); 

};

const deleteService = async (req, res, next) => {
    const serviceId = req.params.sid; // get the :sid from the request 
    
    let service;
    try {
        service = await Service.findById(serviceId).populate('professionals');
    } catch (err) {
        return next(new HttpError('Something went wrong, could not delete service (1)', 500));
    }

    if (!service) {
        return next(new HttpError('Something went wrong, could not find service for this id', 404));
    }

    try {
        await service.remove();
    } catch (err) {
        return next(new HttpError('Something went wrong, could not delete service (2)', 500));
    }

    res.status(200).json({ message: 'Deleted service.'} );
};

exports.getServices = getServices;
exports.getServiceById = getServiceById;
exports.getServicesByProfessionalId = getServicesByProfessionalId;
exports.createService = createService;
exports.updateService = updateService;
exports.deleteService = deleteService;