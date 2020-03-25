const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const fs = require('fs')
const path = require('path')

server.use(middlewares)

server.get('/transactions', (req, res) => {
  const file = fs.readFileSync(path.join(__dirname, 'transactions.json'))
  res.jsonp(JSON.parse(file))
})

server.use(jsonServer.bodyParser)
server.listen(3000, () => {
  console.log('Server is running port 3000')
})
