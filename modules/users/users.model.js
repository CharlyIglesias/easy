const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const usersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false,
        default: "''",
    },
    phone: {
        type: String,
        required: false,
        unique: false,
    },
    img_profile: {
        type: String,
        required: false,
        unique: false,
    },
    password: {
        type: String,
        required: false,
        unique: false,
    },
    
}, {
    timestamps: true
});

usersSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('users', usersSchema);