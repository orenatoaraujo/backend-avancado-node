const mongoose = require('mongoose');

module.exports = () => {
    const schema = mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        cpf: {
            type: String,
            required: true,
            unique: true
        }
    });

    return mongoose.model('Client', schema);
}