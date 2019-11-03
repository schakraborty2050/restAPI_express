
const User = require('../models/users.model');
exports.create = (req, res)=>{
    // Validate request
    if(!req.body) {
        return res.status(400).send({
            message: "User data can not be empty"
        });
    }

    // Create User
    const user = new User({
        firstName: req.body.firstName || "", 
        lastName: req.body.lastName || "",
        email: req.body.email || "",
        phoneNo: req.body.phoneNo || "",
        password: req.body.password || "",
    });

    // Save User data in the database
    user.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the User."
        });
    });
}
exports.findAll = (req, res) => {

};


exports.findOne = (req, res) => {

};


exports.update = (req, res) => {

};


exports.delete = (req, res) => {

};