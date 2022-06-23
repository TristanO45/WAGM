const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    date: {type: Date, default: Date.now}
})

module.exports = mongoose.model('userInfo', userSchema )