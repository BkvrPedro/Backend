const express = require('express');
const autores = require('./controladores/autores');
const livros = require('./controladores/livros');

const rotas = express();

// autores:
rotas.get('/autores', autores.listarAutores);
rotas.get('/autores/:id', autores.obterAutor);
rotas.post('/autores', autores.cadastrarAutor);
rotas.put('/autores/:id', autores.editarAutor);
rotas.delete('/autores/:id', autores.excluirAutor);

// livros:
rotas.get('/livros', livros.listarLivros);
rotas.get('/livros/:id', livros.obterLivro);
rotas.post('/livros', livros.cadastrarLivros);
rotas.put('/livros/:id', livros.editarLivro);
rotas.delete('/livros/:id', livros.excluirLivro);


module.exports = rotas;
