const express = require('express')
const connectMongo = require('./config/db.mongo')


const router = require('./router/items.router')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))
connectMongo()

app.get('/', (r, x) => x.send('OK'))
app.use('/api/item', router)

const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
    console.log('Listening server... OK');
})