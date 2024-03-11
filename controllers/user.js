const User = require('../models/User');

exports.createUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).send(newUser);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.getUser = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error.message);
    }
}

exports.modifyUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).send(user);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        res.status(200).send(user);
    }
    catch (error) {
        res.status(400).send(error.message);
    }
}
