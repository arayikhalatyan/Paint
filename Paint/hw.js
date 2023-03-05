var express = require("express");
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var cords = [];

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3000, function(){
    console.log("working!!!!!!!!!!!!!!!!!!!!!!!!!!!!");
});


io.on('connection', function (socket) {
   for(var i in cords) {
     io.sockets.emit("staci kordinatnerd!", cords[i]);//[12,52]
   }
   socket.on("newCords", function (data) {
       cords.push(data);
       io.sockets.emit("staci kordinatnerd!", data);
   })
});
