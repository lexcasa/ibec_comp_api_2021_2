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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})