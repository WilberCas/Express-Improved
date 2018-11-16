const mongoose = require('mongoose');
let Course = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        unique: true
    }
});
module.exports = mongoose.model('course', Course);