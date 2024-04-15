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
    console.log(obj);
  return User.findOne(obj).exec(); 
};

const saveUser = async (newUser) => {
   return await newUser.save(); 

};


module.exports = { connect, disconnect, findUser, saveUser };





