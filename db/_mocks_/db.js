
const connect = async () => {
    
    console.log('MongoDB mocked connection');
   
};
const disconnect = async () => {
    console.log('Mocked Disconnection');
    await mongoose.connection.close();
};

const findUser = async (obj) => {
    console.log(obj);
  return Promise.resolve({
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
};

const saveUser = async (newUser) => {
   return Promise.resolve({
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

};


module.exports = { connect, disconnect, findUser, saveUser };





