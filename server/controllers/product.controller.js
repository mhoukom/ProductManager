const Product = require('../models/product');

module.exports = {

    findAll: (req, res) => {
        Product.find()
            .then(allProducts => res.json({products: allProducts}))
            .catch(err => res.json({message: 'Something went wrong', error: err}))
    },

    findOne: (req, res) => {
        Product.findById(req.params._id)
            .then(oneProduct => res.json({product: oneProduct}))
            .catch(err => res.json({message: 'Something went wrong', error: err}))
    },

    create: (req, res) => {
        Product.create(req.body)
            .then(newProduct => res.json(newProduct))
            .catch(err => res.json({message: 'Something went wrong', error: err}))
    },

    update: (req, res) => {
        Product.findByIdAndUpdate(req.params._id, req.body, {new: true, runValidators: true})
            .then((updatedProduct) => {res.json(updatedProduct)})
            .catch(err => res.json({message: 'Something went wrong', error: err}))
    },

    delete: (req, res) => {
        Product.findByIdAndDelete(req.params._id)
            .then(result => res.json(result))
            .catch(err => res.json({message: 'Something went wrong', error: err}))
    }
}