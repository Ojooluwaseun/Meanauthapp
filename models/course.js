import mongoose from 'mongoose';
import config from '../config/database';


var uniqueValidator = require('mongoose-unique-validator');
const Schema = mongoose.Schema;

//Course Schema
let courseSchema = new Schema({
    name: { type: String, required: true, unique: true },
    
});
courseSchema.plugin(uniqueValidator, { message: 'Error, expected to be unique.'})
module.exports = mongoose.model('Course', courseSchema);