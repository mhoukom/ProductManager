const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({

    title: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least 3 characters, the entry '{VALUE}' is less than 3 characters"]
    },
    price: {
        type: Number,
        required: [true, "{PATH} must be present"],
        minlength: [1, "{PATH} must be at least 1 character"]
    },
    description: {
        type: String,
        required: [true, "{PATH} must be present"],
        minlength: [3, "{PATH} must be at least 3 characters"]
    }
}, {timestamps: true})

// make schema & export
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
