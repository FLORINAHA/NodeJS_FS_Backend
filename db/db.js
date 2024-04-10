require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/userModel');


const connect = async () => {
    try {
        await mongoose.connect(process.env.mongo);
        console.log('MongoDB is up and running');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};

const disconnect = async () => {
    await mongoose.connection.close();
};

//obj {firstName: req.body.firstName, email: req.body.email}
const findUser = async (obj) => {
    User.findOne(obj);
};

const saveUser = async (newuser) => {
    try {
        return await newuser.save();
    } catch (error) {
        console.error('Error saving user:', error);
        throw error;
    }
};

module.exports = { connect, disconnect, findUser, saveUser };
