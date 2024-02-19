const mongoose = require('mongoose');

const sneakerSchema = new mongoose.Schema ({
    brand: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    size: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    releaseDate: Date,
    price: Number,
    limitedEdition: {
        type: Boolean,
        default: false
    },
    description: String,
    imageUrl: String
});

const Sneaker = mongoose.model('Sneaker', sneakerSchema);

module.exports = Sneaker;