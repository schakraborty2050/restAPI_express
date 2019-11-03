const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phoneNo:String,
    password: String
 }, {
    timestamps: true
});

 const userModel = mongoose.model('Users', userSchema);

module.exports = userModel;