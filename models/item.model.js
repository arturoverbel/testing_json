const mongoose = require('mongoose')

const ItemModel = mongoose.model('Item', mongoose.Schema({
    name: {type: String, max: 200},
    phome: {type: String, max: 200},
    address: {
        type: mongoose.Schema({
            dir: {type: String, max: 200},
            lat: {type: String, max: 200},
            lng: {type: String, max: 200}
        })
    }
}))

module.exports = ItemModel