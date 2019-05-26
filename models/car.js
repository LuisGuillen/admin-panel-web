const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types

const CarSchema = new Schema({
    make: { type: String, required: true },
    model: { type: String, required: true },
    year: Number,
    milage: Number,
    user_id: ObjectId
});

module.exports = mongoose.model('Car', CarSchema);
