<template>
  <div id="app">
    <div>
      <button v-on:click="showForm = true" style="margin-right: 1rem">+Producto</button>
      <button v-on:click="showForm = false">Listar productos</button>
    </div>
    <!-- Listado de productos -->
    <div v-if="!showForm">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Cod</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="producto in productos" :key="producto._id">
              <td>{{producto._id}}</td>
              <td>{{producto.cod}}</td>
              <td>{{producto.nombre}}</td>
              <td>{{producto.precio}}</td>
              <td>{{producto.cantidad}}</td>
              <th>
                <button v-on:click="seleccionarProducto(producto)">Seleccionar</button>
                <button v-on:click="eliminarProducto(producto._id)">Eliminar</button>
              </th>
            </tr>
          </tbody>
        </table>
    </div>
    <!-- FORM -->
    <div v-if="showForm">
      <form action="">
        <input type="text" v-model="producto.cod" placeholder="Codigo producto">
        <br>
        <input type="text" v-model="producto.nombre" placeholder="Nombre">
        <br>
        <input type="number" v-model="producto.cantidad" placeholder="Cantidad">
        <br>
        <input type="number" v-model="producto.precio" placeholder="Precio">
        <br>
        <button v-on:click="guardaProducto()" type="button">Guardar</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

const API = 'http://localhost:3000'

const copy = function (obj){
  return JSON.parse( JSON.stringify(obj) )
}

export default {
  name: 'App',
  data(){
    return {
      nombre: "",
      apellido: "Casadevall",
      nombreCompleto: "",
      showForm: false,
      producto: {
        cod: '',
        nombre: '',
        cantidad: 0,
        precio: 0
      },
      productos: [
        {
            "_id": "61aff443fcdd1c9d90a60e0b",
            "cod": "ABC123",
            "nombre": "Manzana II",
            "precio": 12.22,
            "cantidad": 2
        },
        {
            "_id": "61aff443fcdd1c9d90a60e0c",
            "cod": "ABC111",
            "nombre": "Pera",
            "precio": 10.22,
            "cantidad": 2
        }
      ]
    }
  },
  methods: {
    muestraNombre: function (){
      this.nombreCompleto = this.nombre + " " + this.apellido
    },
    seleccionarProducto: function (producto){
      console.log(producto)
      this.producto = copy(producto)
      this.showForm = true
    },
    guardaProducto: function (){
      console.log(this.producto)
      if(!this.producto._id){
        axios.post(API + '/productos/new', this.producto).then( res => {
          console.log("res :: ", res.data)
          this.obtenerProductos()
          this.clearProducto()
        })
      } else {
        axios.put(API + '/productos/edit', this.producto).then( res => {
          console.log("edit :: ", res.data)
          this.obtenerProductos()
          this.clearProducto()
        })
      }
    },
    obtenerProductos: function (){
      // Hacemos la peticion de tipo GET a la API de productos
      axios.get(API + '/productos').then( (res) => {
        this.productos = res.data.response
      })
    },
    clearProducto: function (){
      this.producto = {
        cod: '',
        nombre: '',
        cantidad: 0,
        precio: 0
      }
    },
    eliminarProducto: function (id){
      console.log("id ::", id)
      if(confirm("Esta seguro que quiere eliminar el producto?")){
        axios.delete(API + '/productos/' + id).then( (res) => {
          console.log("deleted ::", res.data)
          this.obtenerProductos()
        })
      }
    }
  },
  mounted(){
    this.obtenerProductos()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
