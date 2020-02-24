const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema;

const professionalSchema = new Schema({
    fullName: { type: String, required: true },
    category: { type: String, required: true },
    description: { type: String },
    selfEmployed: { type: Boolean, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, minlength: 6 },
    phone: { type: String, required: true },
    logo: { type: String },
    rating: { type: String }
    //services: [{type: mongoose.Schema.Types.ObjectId, ref:'Service'}]
});

professionalSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Professional', professionalSchema);