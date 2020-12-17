require('dotenv').config()
import http from 'http'
import makeServer from './src/server'

const app = makeServer()
const server = http.createServer(app)

var port = process.env.PORT || 5000

server.listen(port, () => {
    console.log(`**listennig ${port}**`)
});