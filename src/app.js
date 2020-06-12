const express = require('express')
const app = express()
const port = process.env.PORT || 3333

app.use(express.static(__dirname + '/static/'))

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/static/html/index.html')
})

app.listen(port)