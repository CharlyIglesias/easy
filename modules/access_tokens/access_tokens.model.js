const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const access_tokensSchema = new mongoose.Schema({
    user_id: {
        type: [mongoose.Schema.Types.ObjectId],
        required: true,
        unique: false,
        default: "",
        ref: "users",
    },
    token: {
        type: String,
        required: false,
        unique: false,
        default: "''",
    },
    
}, {
    timestamps: true
});

access_tokensSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('access_tokens', access_tokensSchema);