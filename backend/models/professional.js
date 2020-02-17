const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const professionalSchema = new Schema({
    fullName: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String },
    selfEmployed: { type: Boolean, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true },
    rating: { type: String, required: true },
    logo: { type: String }
});

professionalSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Professional', professionalSchema);