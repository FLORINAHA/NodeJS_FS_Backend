require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/userModel');


const connect = async () => {
await mongoose.connect(process.env.mongo);
console.log('MongoDB is up and running');


};

const disconnect = async () => {
    await mongoose.connection.close();
};

//obj {firstName: req.body.firstName, email: req.body.email}
const findUser = async (obj) => {
    User.findOne(obj).exect();
};

const saveUser = async (newuser) => {
    try {
        newuser._id = mongoose.Types.ObjectId();
        return await newuser.save();
    } catch (error) {
        console.error('Error saving user:', error);
        throw error;
    }
};

module.exports = { connect, disconnect, findUser, saveUser };
