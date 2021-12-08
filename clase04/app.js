const app = require('express')()
const bodyParser = require('body-parser')
const port = 3000
const Mdb  = require('./services/mdb.service')

app.use(bodyParser.json())

app.get('/productos', async (req, res) => {
    const productos = await Mdb.find({}, 'productos')
    res.set({'Content-Type': 'application/json'})
    res.send({response: productos})
})

app.get('/clientes', async (req, res) => {
    const clientes = await Mdb.find({}, 'clientes')
    res.set({'Content-Type': 'application/json'})
    res.send({response: clientes})
})

app.get('/proveedores', async (req, res) => {
    const proveedores = await Mdb.find({}, 'proveedores')
    res.set({'Content-Type': 'application/json'})
    res.send({response: proveedores})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})