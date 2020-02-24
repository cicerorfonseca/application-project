const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    postalCode: { type: String, required: true },
    professionalCategory: { type: String, required: true },
    serviceType: { type: String, required: true },
    //Service Details
    serviceDetail: { type: String },
    servicePriority: { type: String },
    //User Form
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    emailAddress: { type: String, required: true },
    professionals: [{type: mongoose.Schema.Types.ObjectId, required: true, ref:'Professional'}]
});

module.exports = mongoose.model('Service', serviceSchema);