const { connect, disconnect, saveUser, findUser } = require('./db');
const User = require('../models/userModel');
const mongoose = require('mongoose');

beforeAll(async () => {
  await connect();
});

describe('User Test Suite', () => {
  test('As a user I want to save a user to the database', async () => {
    const newUser = new User({
      _id: new mongoose.Types.ObjectId(),
      firstName: 'Florina',
      lastName: 'Hat',
      address: 'Street',
      city: 'Timisoara',
      state: 'TM',
      zipCode: '123456',
      email: 'florina@yahoo.com',
      password: '123',
    });

    const user = await saveUser(newUser);
    expect(user.firstName).toEqual('Florina');
    expect(user.lastName).toEqual('Hat');
    expect(user.address).toEqual('Street');
    expect(user.city).toEqual('Timisoara');
    expect(user.state).toEqual('TM');
    expect(user.zipCode).toEqual('123456');
    expect(user.email).toEqual('florina@yahoo.com');
    expect(user.password).toEqual('123');
  });
  //write another test

});

afterAll(async () => {
  await disconnect();
});
