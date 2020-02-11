const express = require('express');
const path = require('path');
//criando app 
const app = express();
//criando prototocolo  wss
const server = require('http').createServer(app);
//criando sockets
const io = require('socket.io')(server);
//definindo os arquivos publicos da aplicação 
app.use(express.static(path.join(__dirname,'client')));