import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import config from '../config/database';

var uniqueValidator = require('mongoose-unique-validator');
var validate = require('mongoose-validator')
var defaultValues = require('mongoose-default-values')

var nameValidator = [
    validate({
        validator: 'matches',
        arguments: /^(([a-zA-Z]{3,20})+[ ]+([a-zA-Z]{3,20})+)+$/,
        message: 'Name must be at least 3 characters, max 30, no special characters or numbers, must have space in between name.'
    }),
    validate({
        validator: 'isLength',
        arguments: [3, 20],
        message: 'Name should be between {ARGS[0]} and {ARGS[1]} characters'
    })
];

var usernameValidator = [
  validate({
    validator: 'isLength',
    arguments: [3, 50],
    message: 'Username should be between {ARGS[0]} and {ARGS[1]} characters',
  }),
  validate({
    validator: 'isAlphanumeric',
    passIfEmpty: true,
    message: 'Username should contain alpha-numeric characters only',
  }),
]

var emailValidator = [
    validate({
        validator: 'matches',
        arguments: /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/,
        message: 'Enter a valid Email address.'
    }),
    validate({
        validator: 'isLength',
        arguments: [3, 40],
        message: 'Email should be between {ARGS[0]} and {ARGS[1]} characters'
    })
];

var passwordValidator = [
    validate({
        validator: 'matches',
        //arguments: /^(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[\d])(?=.*?[\W]).{8,35}$/,
        arguments: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/,
        message: 'Password needs to have at least one lower case, one uppercase, one number, one special character, and must be at least 8 characters but no more than 35.'
    }),
    // validate({
    //     validator: 'isLength',
    //     arguments: [8, 35],
    //     message: 'Password should be between {ARGS[0]} and {ARGS[1]} characters'
    // })
];

let UserSchema = mongoose.Schema({
    name: { type: String, required: true, validate: nameValidator },
    email: { type: String, required: true, validate: emailValidator },
    username: { type: String, required: true, unique: true, validate: usernameValidator },
    password: { type: String, required: true, validate: passwordValidator },
    university:{type: String },
    course:{ type: String },
    career:{ type: String },
    skills:[String],
    isAdmin: {type: Boolean},
    registerDate: {type: Date, default:Date.now()},
});

UserSchema.plugin(uniqueValidator, { message: 'Error, expected to be unique.'});
UserSchema.plugin(defaultValues);

let User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserById = function(id, callback) {
    User.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback) {
    const query = {username: username}
    User.findOne(query, callback);
}

module.exports.addUser = function(newUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if(err) throw err;
            newUser.password = hash;
            newUser.save(callback);
        });
    
    })
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    })
}