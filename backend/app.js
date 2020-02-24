// Node modules
const express = require('express');
const bp = require('body-parser');
const mongoose = require('mongoose');

// Project modules (routers)
const servicesRoutes = require('./routes/services-route');
const professionalsRoutes = require('./routes/professionals-route');

// Project models
const HttpError = require('./models/http-error');

const app = express();

app.use(bp.json());

// Allowing CORS on the Browser (Middleware)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); 
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    next();
});

app.use('/api/services', servicesRoutes);
app.use('/api/professionals', professionalsRoutes);

// it will just run if the previous request didn't get a response
// default error for this path / route 
app.use((req, res, next) => {
    const error = new HttpError('Could not find this route', 404);
    throw error;
});

app.use((error, req, res, next) => {
    if(res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({message: error.message || 'An unknown error occurred!'});
});

// Database (MongoDB)
const connectUrl = 'mongodb+srv://services_iwd:Vli9gRoD6uoCSmjw@cluster0-ih1np.mongodb.net/servicesApi?retryWrites=true&w=majority';
const connectConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}

mongoose
    .connect(connectUrl, connectConfig)
    .then(() => {
        console.log('+++ Database connected! +++');
        app.listen(5000);
    })
    .catch(err => {
        console.log(err);
    });