const jwt = require('jsonwebtoken');

const HttpError = require('../models/http-error');

module.exports = (req, res, next) => {

    try {
        const token = req.headers.authorization.split(' ')[1];    
        
        if (!token) {
            throw new HttpError('Authentication failed');
        }

        const decodedToken = jwt.verify(token, 'mr_services_pk'); // Validate the token
        req.professionalData = { professionalId: decodedToken.professionalId }; // Include the professionalId to the request (Authenticated users only)
        next(); // Let the request flow to the next methods 

    } catch (error) {
        return next(new HttpError('Authentication failed', 401));
    }
    

    
};