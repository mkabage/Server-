constProduct = require('../models/product')

exports.getAll = asyncfunction(req, res) {
    let products = await Product.find()
    res.json({data: products})
}