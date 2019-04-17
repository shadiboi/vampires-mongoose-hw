const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

const vampireSchema = new Schema({
    //write your schema fields here
    name: {type: String, required: true, unique: true},
    hair_color: {type: String, default: 'blonde'},
    eye_color: {type: String},
    dob: {type: Date},
    loves: [{type: String}],
    location: {type: String},
    gender: {type: String},
    victims: {type: Number, required: true, min:0},
    title: {type: String, required: false},
  });

const Vampires = mongoose.model('Vampires', vampireSchema);

module.exports=Vampires