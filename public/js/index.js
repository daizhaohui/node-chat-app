var socket = new io();
socket.on('connect',function(){
    console.log("connected to server.")
});

socket.on('disconnect',function(){
    console.log("disconnected from server")
});

socket.on('newEmail',function (email) {
    console.log('new email:'+JSON.stringify(email));
});

socket.on('broadcast',function(message){
   console.log(message);
});