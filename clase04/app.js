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

app.post('/productos/new', async (req, res) => {
    res.set({'Content-Type': 'application/json'})
    // Verificar si ya existe el cod dentro de la base
    const existProd = await Mdb.find({cod: req.body.cod}, 'productos')
    if(existProd.length > 0){
        res.send({error: "Ya existe el producto en la base."})
    } else {
        const response = await Mdb.insertOne(req.body, 'productos')
        res.send({response: response})
    }
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