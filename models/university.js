import mongoose from 'mongoose';
import config from '../config/database';


var uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

//University Schema
let universitySchema = new Schema({
    name: {type: String, required: true, unique: true}
    
}); 

universitySchema.plugin(uniqueValidator, { message: 'Error, expected to be unique.'});
module.exports = mongoose.model('University', universitySchema);




