const mongoose = require('mongoose');

const recetteSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: true
    },
    ingredients: {
        type: [String],
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    tempsPreparation: {
        type: Number,
        required: true
    },
    difficulte: {
        type: String,
        enum: ['Facile', 'Moyenne', 'Difficile'],
        required: true
    },
    categorie: {
        type: String,
        required: true
    },
    dateCreation: {
        type: Date,
        default: Date.now
    }
});

const cook = mongoose.model('cook', recetteSchema);

module.exports = cook;