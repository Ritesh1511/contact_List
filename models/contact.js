// require the library
const mongoose = require('mongoose');

// creating the contact schema
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    phone: {
        type: String,
        required: true,
        unique: true
    }
})

// adding Contact collection/model of contactSchema schema
const Contact = mongoose.model('Contact', contactSchema);

// exporting the Contact Schema
module.exports = Contact;