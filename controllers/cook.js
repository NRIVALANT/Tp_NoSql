const cook = require('../models/cook');

exports.createCook = async (req, res) => {
    try {
        const { titre, ingredients, instructions, tempsPreparation, difficulte, categorie, commentary } = req.body;
        const newCook = new cook({ titre, ingredients, instructions, tempsPreparation, difficulte, categorie, commentary });
        await newCook.save();
        res.status(201).send(newCook);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

exports.getCook = async (req, res) => {
    try {
        const cooks = await cook.find({});
        res.status(200).send(cooks);
    } catch (error) {
        res.status(400).send(error.message);
    }  
}

exports.modifyCook = async (req, res) => {
    try {
        const cooks = await cook.findByIdAndUpdate(req.params.id , req.body  , { new: true });
        res.status(200).send(cooks);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}

exports.deleteCook = async (req, res) => {
    try {
        const cooks = await cook.findByIdAndDelete(req.params.id);
        res.status(200).send(cooks);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}