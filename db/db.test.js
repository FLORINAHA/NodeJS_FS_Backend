const { connect, disconnect, saveUser, findUser } = require('./db');
const User = require('../models/userModel');
const mongoose = require('mongoose');

describe('User Test Suite', () => {
  beforeEach(async () => {
    await connect(); // Establish connection before each test
  });

  afterEach(async () => {
    await disconnect(); // Disconnect after each test
  });

  test('As a user I want to save a user to the database', async () => {
    const newUser = new User({
      firstName: 'Florina', // Remove unnecessary _id assignment
      lastName: 'Hat',
      adress: 'Street',
      city: 'Timisoara',
      state: 'TM',
      zipCode: '123456',
      email: 'florina@yahoo.com',
      password: '123',
    });

    const user = await saveUser(newUser);

    expect(user.firstName).toEqual('Florina');
    expect(user.lastName).toEqual('Hat');
    expect(user.adress).toEqual('Street'); // Corrected property name
    expect(user.city).toEqual('Timisoara');
    expect(user.state).toEqual('TM');
    expect(user.zipCode).toEqual('123456');
    expect(user.email).toEqual('florina@yahoo.com');
    expect(user.password).toEqual('123');
  });
});
