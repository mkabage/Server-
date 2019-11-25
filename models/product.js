constmongoose = require('mongoose')
constproductSchema =newmongoose.Schema({
    name: String
})
module.exports = mongoose.model('Product', productSchema)