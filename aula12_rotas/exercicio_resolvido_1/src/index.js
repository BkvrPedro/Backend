const express = require('express')

const app = express();

const { listagemCarros, obterCarro } = require('./controladores/carros')

const { validarSenha } = require('./intermediarios')


app.use(validarSenha)


app.get('/carros', listagemCarros);
app.get('/carros/:id', obterCarro)

app.listen(3000);   