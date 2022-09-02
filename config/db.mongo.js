const mongoose = require('mongoose')

const connectMongo = () => {
    mongoose.connect('mongodb+srv://r2d2:Bs8a0hZG6uxaf9Gq@cluster111.czvoz.mongodb.net/?retryWrites=true&w=majority')
}

module.exports = connectMongo