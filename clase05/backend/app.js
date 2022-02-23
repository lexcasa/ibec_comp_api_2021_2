const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000
const Mdb  = require('./services/mdb.service')

app.use(cors())
app.use(bodyParser.json())

app.get('/productos', async (req, res) => {
    const productos = await Mdb.find({}, 'productos')
    res.set({'Content-Type': 'application/json'})
    res.send({response: productos})
})


app.get('/productos/:id', async (req, res) => {
    const id        = req.params.id
    const productos = await Mdb.findById({id: id}, 'productos')
    res.set({'Content-Type': 'application/json'})

    if(productos.length > 0){
        res.send({response: productos[0]})
    } else {
        res.send({error: "No existe producto para la id: " + id})
    }
})

app.delete('/productos/:id', async (req, res) => {
    const id        = req.params.id
    const productos = await Mdb.deleteOne(id, 'productos')
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


app.put('/productos/edit', async (req, res) => {
    res.set({'Content-Type': 'application/json'})
    // Verificar si ya existe el cod dentro de la base
    const body     = req.body
    const response = await Mdb.updateOne(req.body, 'productos')
    res.send({response: response})
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