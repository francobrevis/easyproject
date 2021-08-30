let express = require('express')
let path = require('path')
let bodyParser = require('body-parser')
let methodOverride = require('method-override')
let redis = require('redis')
let client = redis.createClient({
	host:'redis',
	port: 6379
})

// Definir Rutas
let routes = require('./Routes/api')

// Setear puerto de api
let PORT = 4040

// Iniciar api
let app = express()

// Iniciar conexion con redis 
client.on('connect', () => {
  console.log('Connected to Redis...')
})

// bodyParser
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

// methodOverride
app.use(methodOverride('_method'))

// Routes Middleware
app.use(routes)

// 404 error
app.use((req, res) => {
  res.status(404)
  res.send('endpoint not found')
})

// servir api en puerto indicado
app.listen(PORT, () => {
  console.log('Server started on port ' + PORT)
});

module.exports = app
