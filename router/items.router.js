const { Router } = require('express')
const ItemModel = require('../models/item.model')

const routerProduct = Router()

routerProduct.post('/', (req, res) => {
    const p = new ItemModel(req.body)
    p.save()
        .then(() => res.json(p))
        .catch(e => res.json(e))
})
routerProduct.get('/', (req, res) => {
    ItemModel.find({})
        .then(p => res.json(p))
        .catch(e => res.send(e))
})

module.exports = routerProduct