const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname,'../pubic');
const app = new express();
const port = process.env.PORT || 3000;
const socketIO = require('socket.io');
const http = require('http');

app.use(express.static('public'));
const server = http.createServer(app);
var io = socketIO(server);


app.get('/get',(req,res)=>{
    res.send('hello,world!')
});


server.listen(port,()=>{
    console.log(`server is up to port:${port}`)
});

io.on('connection',client=>{
    console.log('new user connected.');

    client.on('disconnect',()=>{
        console.log('user was disconnected.');
    });

    client.emit('newEmail',{
        from:'daizhaohui@vis.sina.com',
        to:'geaiming@sina.com',
        text:'hello,world!'
    });

    client.on('broadcast',()=>{
        console.log('broadcast');
        io.emit('broadcast','I love you.')
        client.broadcast.emit('broadcast','I hate you.')
    });


});

