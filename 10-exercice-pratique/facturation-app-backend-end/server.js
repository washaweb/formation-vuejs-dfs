const http = require('http')

//Express server
const app = require('./backend/app')

app.set('port', 3000)
const server = http.createServer(app)
server.listen(3000)