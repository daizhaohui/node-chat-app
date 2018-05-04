const express = require('express');
const path = require('path');
const publicPath = path.join(__dirname,'../pubic');
const app = new express();
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.listen(3000,()=>{
    console.log(`app listen port:${port}`);
});