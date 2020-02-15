//definindo a porta do servidor
const port = 3000;
//criando express
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
//definindo onde ira ficar as views
app.set('views',path.join(__dirname,'client'));
//definindo a engine para 'html'
app.engine('html',require('ejs').renderFile);
//definindo a view
app.set('view engine','html');
//quando entrar na rota padrao sera iniciado o 'index.html'
app.use('/',(req,res)=>{
    res.render(submit);
    res.render('index.html');
});
//iniciando conexao com um socket
io.on('connection', socket =>{
console.log('Socket Conectado: ${socket.id}');
});
//server
app.listen(port,function(){
  console.log('Server is running at http://localhost:'+ port);
});