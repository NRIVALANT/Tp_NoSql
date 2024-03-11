const commentary = require('../models/commentary');

exports.createCommentary = async (req, res) => {
    try {
        const newCommentary = await commentary.create(req.body);
        res.status(201).send(newCommentary);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

exports.getCommentary = async (req, res) => {
    try {
        const commentaries = await commentary.find({});
        res.status(200).send(commentaries);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

exports.modifyCommentary = async (req, res) => {
    try {
        const commentaries = await commentary.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send(commentaries);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}

exports.deleteCommentary = async (req, res) => {
    try {
        const commentaries = await commentary.findByIdAndDelete(req.params.id);
        res.status(200).send(commentaries);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}
