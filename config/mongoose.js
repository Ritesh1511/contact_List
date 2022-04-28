// require the library
const mongoose = require('mongoose');

// connect to the database
mongoose.connect('mongodb://localhost/contact_list_db');


// getting access to the database
const db = mongoose.connection;

// on getting error
db.on('error', console.error.bind(console, 'Error connecting on Database'));

// up and running then print the message
db.once('open', () => {
    console.log("Successfully connecting to database");
});

module.exports = db;