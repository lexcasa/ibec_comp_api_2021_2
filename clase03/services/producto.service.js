// Requiero los productos del model
const {productos} = require('../model/productos')
const Producto = {
    productoNuevo: function (producto){
        productos.push(producto)
        return productos
    }
}
module.exports = Producto