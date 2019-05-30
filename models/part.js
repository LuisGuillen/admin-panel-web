const mongoose = require('mongoose');
const { Schema } = mongoose;
const { ObjectId } = Schema.Types

const PartSchema = new Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    status: Number,
    active: { type: Number, default: 1 },
    car_id: ObjectId
});

module.exports = mongoose.model('Part', PartSchema);
