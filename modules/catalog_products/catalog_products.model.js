const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const catalog_productsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false,
        default: "''",
    },
    description: {
        type: String,
        required: false,
        unique: false,
        default: "''",
    },
    height: {
        type: Number,
        required: false,
        unique: false,
        default: "",
    },
    length: {
        type: Number,
        required: false,
        unique: false,
        default: "",
    },
    width: {
        type: Number,
        required: false,
        unique: false,
        default: "",
    },
    
}, {
    timestamps: true
});

catalog_productsSchema.plugin(mongoosePaginate);
module.exports = mongoose.model('catalog_products', catalog_productsSchema);