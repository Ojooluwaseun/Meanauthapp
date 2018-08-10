import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import config from '../config/database';

var uniqueValidator = require('mongoose-unique-validator');
var defaultValues = require('mongoose-default-values')
let UserSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
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