import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import config from '../config/database';

var uniqueValidator = require('mongoose-unique-validator');
const adminUserSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

adminUserSchema.plugin(uniqueValidator, { message: 'Error, expected to be unique.'});

const adminUser = module.exports =mongoose.model('adminUser', adminUserSchema);

module.exports.getUserById = function(id, callback) {
    adminUser.findById(id, callback);
}

module.exports.getUserByUsername = function(username, callback) {
    const query = {username: username}
    adminUser.findOne(query, callback);
}

module.exports.addUser = function(newadminUser, callback) {
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newadminUser.password, salt, (err, hash) => {
            if(err) throw err;
            newadminUser.password = hash;
            newadminUser.save(callback);
        });
    
    })
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, (err, isMatch) => {
        if(err) throw err;
        callback(null, isMatch);
    })
}