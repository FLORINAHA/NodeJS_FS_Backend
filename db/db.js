const mongoose = require('mongoose');
const User = require('../models/userModel');
require('dotenv').config();

const connect = async () => {
    await mongoose.connect(process.env.mongo);
    console.log('MongoDB is up and running');
};

const disconnect = async () => {
    await mongoose.connection.close();
};

const findUser = async (obj) => {
    return User.findOne(obj).exec(); // Am corectat și eroarea de scriere a metodei exec()
};

const saveUser = async (newUser) => {
    try {
        // Generăm un _id manual pentru utilizator
        newUser._id = new mongoose.Types.ObjectId();
        return await newUser.save();
    } catch (error) {
        console.error('Error saving user:', error);
        throw error;
    }
};

module.exports = { connect, disconnect, findUser, saveUser };
