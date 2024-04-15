const mongoose = require('mongoose');
const User = require('../models/userModel');
require('dotenv').config();

const connect = async () => {
    
    console.log('MongoDB is up and running');
    await mongoose.connect(process.env.mongo);
};

const disconnect = async () => {
    await mongoose.connection.close();
};

const findUser = async (obj) => {
    return User.findOne(obj).exec(); 
};

const saveUser = async (newUser) => {
    try {
       
        newUser._id = new mongoose.Types.ObjectId();
        return await newUser.save();
    } catch (error) {
        console.error('Error saving user:', error);
        throw error; 
    }
};

module.exports = { connect, disconnect, findUser, saveUser };





