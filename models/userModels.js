const mongoose = require ("mongoose");
const userSchema = mongoose.Schema({
    //id
    //firstName,LastName, address, city, state, zip, email, password
_id: mongoose.Schema.Types.ObjectId,
firstName: {
    type: String,
    required: true,
},
LastName:{
    type: String,
    requied: true,
},
adress:{
    type: String,
    requied: true,
},
city:{
    type: String,
    requied: true,
},

state : {
    type: String,
    required: true,
},
zipCode :{
    type: String,
    requied: true,
},
email:{
    type: String,
    requied: true,
},
password:{
    type: String,
    requied: true,
},
})
module.exports = mongoose.model("User", userSchema)




