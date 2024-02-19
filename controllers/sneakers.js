const Sneaker = require('../models/sneakers');

exports.createSneacker = async(req, res) => {
    try {
        const newSneaker = new Sneaker(req.body);
        const savedSneaker = await newSneaker.save();
        res.status(201).json(savedSneaker);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};