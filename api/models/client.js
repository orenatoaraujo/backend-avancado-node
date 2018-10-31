var mongoose = require('mongoose');

module.exports = function(app) {
    var schema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            index: true,
            unique: true
        },
        phone: {
            type: String,
            required: false
        }
    });

    return mongoose.model('Client', schema);
}