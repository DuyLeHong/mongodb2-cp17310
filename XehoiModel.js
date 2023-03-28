const mongoose = require('mongoose');

const XeHoiSchema = new mongoose.Schema({
    ten: {
        type: String,
        required: true
    },
    nam: {
        type: Number
    },
    giaban: {
        type: Number,
        default: 0
    }
}); 

const XeHoiModel = new mongoose.model('xehoi', XeHoiSchema);

module.exports = XeHoiModel;

