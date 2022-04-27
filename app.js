//* Objeto express
const express = require('express')
//* App de express
const app = express()
//* Puerto en que vamos a ver nuestra app -> localhost:3000
const port = 3000

//* path inicial, respondera a la url
app.get('/', (req, res) => {
      res.send('Hello Explorers 🖐')
})

//* Respondiendo a nueva ruta localhost:3000/launchx
app.get('/launchx', (req, res) => {
      res.send('Bienvenidos a launchx 🚀')
})

//* Regresando un objerto localhost:3000/explorersInNode
app.get('/explorersInNode', (req, res) => {
      const explorer = {name: 'Cristian Flores', username: 'elchicogamer', msg: 'Hello'}
      res.send(explorer)
})

//* Query Params: Recibir parametros por la url localhost:3000/cristian
// req.params = {'explorerName':'cristian'}
app.get('/explorers/:explorerName', (req, res) => { 
      res.send(req.params)
})

//* Inicializamos la app
app.listen(port, () => {
      console.log(`Example app listening on port: ${port}`)
})
