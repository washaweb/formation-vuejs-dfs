require('dotenv').config()
const http = require('http')

//Express server
const app = require('./backend/app')

app.set('port', process.env.PORT || 3000)
const server = http.createServer(app)
server.listen(process.env.PORT || 3000)