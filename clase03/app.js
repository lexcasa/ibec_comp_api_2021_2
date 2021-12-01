const app = require('express')()
const bodyParser = require('body-parser')
const port = 3000

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.set({'Content-Type': 'application/json'})
    res.send({mensaje: "Hola Mundo"})
})

app.get('/productos', (req, res) =>{
    const {productos} = require('./model/productos')
    // const Producto = require('./model/productos')
    // Producto.productos
    res.set({'Content-Type': 'application/json'})
    res.send({response: productos})
})

app.post('/productos/new', (req,res) => {
    const Producto = require('./services/producto.service')
    const response = Producto.productoNuevo(req.body)
    res.set({'Content-Type': 'application/json'})
    res.send({response: response})
})

app.post('/productos/buscar', (req,res) => {
    const Producto = require('./services/producto.service')
    const response = Producto.productoBuscar(req.body)
    res.set({'Content-Type': 'application/json'})
    res.send({response: response})
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

