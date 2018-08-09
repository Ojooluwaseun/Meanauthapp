import mongoose from 'mongoose';
import config from '../config/database';


var uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

//Skill Schema
let skillSchema = new Schema({
    name: { type: String, required: true},
    
});

//Career Schema
let careerSchema = new Schema({
    name: { type: String, required: true, unique: true},
    skills: [skillSchema]
    
});
careerSchema.plugin(uniqueValidator, { message: 'Error, expected to be unique.'})
module.exports = mongoose.model('Career', careerSchema);