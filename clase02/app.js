const express = require('express')
const app = express()
const port = 3000

// Definimos un estado 
// URL: localhost:3000/hello-world
// Metodo: GET
// Input: null
// Output
//  - texto: 'Hello World'

app.get('/hello-world', (req, res) => {
  res.send('Hola World!')
})

// Todos los productos
/*
  - URL: API.com/productos
          -> {host}/{model}/{null}
        - Metodo: GET
        - Input: null
        - Output: 
          - Respuesta correcta: {"response":[{...}, ...]}
          - Respuesta error: {"error": "No se obtuvo productos"}
*/

app.get('/productos', (req, res) => {
  let productos = [
    {"cod":"ABC123", "nombre":"Manzana", "precio":10},
    {"cod":"ABC111", "nombre":"Pera", "precio":10}
  ]

  // Salida
  // content-type de la salida
  // Defino los headers
  res.set({
    'Content-Type': 'application/json'
  })
  let respuesta = {error: "No existe productos"}
  
  if(productos.length > 0){
    respuesta = {
      response: productos
    }
  }
  // Defino el body de la salida
  res.send(respuesta)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})