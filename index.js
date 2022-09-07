const express = require('express')
const io = require('socket.io');
const username = require('./middleware/username');

var app = module.exports = express.createServer();

app.configure(function(){
 app.set('views', __dirname + '/views');
 app.set('view engine', 'jade');
 app.use(express.bodyDecoder());
 app.use(express.methodOverride());
 app.use(app.router);
 app.use(express.staticProvider(__dirname + '/public'));
});

app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 

app.get('/', function(req, res){
 res.render('index', {title: 'Sliced'});
});

if (!module.parent) {
 app.listen(8888);
 console.log("Express server listening on port %d", app.address().port)
}

var socket = io.listen(app);
socket.on('connection', function(client){
 client.send("Server: You're connected as !");

 var user;
 client.on('message', function(data){
   if (!user) {
     user = username.generate();
     socket.broadcast(user + ' has joined.');
     return;
   }
   socket.broadcast(user + ": " + data);
 });
});