// Requiero los productos del model
const {productos} = require('../model/productos')
const Producto = {
    productoNuevo: function (producto){
        productos.push(producto)
        return productos
    },
    productoBuscar: function (producto){
        let findProducto 
        productos.map( item => {
            if(producto.cod == item.cod){
                findProducto = item
            }
        })
        return findProducto
    }
}
module.exports = Producto