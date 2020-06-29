const express = require('express')
const app = express()
const port = process.env.PORT || 3333

app.use(express.static(__dirname + '/static/'))

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/static/html/index.html')
})

app.get('/sobre', (request, response) => {
    response.sendFile(__dirname + '/static/html/sobre.html')
})

app.get('/trabalhos', (request, response) => {
    response.sendFile(__dirname + '/static/html/trabalhos.html')
})

app.get('/contatos', (request, response) => {
    response.sendFile(__dirname + '/static/html/contatos.html')
})

app.get('/quiz', (request, response) => {
    response.sendFile(__dirname + '/static/html/quiz.html')
})

app.get('/comprar-cartao', (request, response) => {
    response.sendFile(__dirname + '/static/html/company.html')
})

app.get('/menu-cards', (request, response) => {
    response.sendFile(__dirname + '/static/html/menuCards.html')
})

app.listen(port)