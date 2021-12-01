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
    },
    productoBuscarNombre: function (producto){
        let findProductos = []
        productos.map( item => {
            if(item.nombre.toLocaleLowerCase().includes( producto.nombre.toLocaleLowerCase() )){
                findProductos.push(item)
            }
        })
        return findProductos
    }
}
module.exports = Producto