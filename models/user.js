const mongoose = require('mongoose');
const { Schema } = mongoose;

const UserSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: String,
    age: Number,
    active: { type: Number, default: 1 },
    type: Number
});

module.exports = mongoose.model('User', UserSchema);
