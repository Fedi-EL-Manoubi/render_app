const express = require('express');
var app = express();

app.get('/API/:code', function (req, res) {
    res.setHeader('contrent-type', 'application/json');
    var infos={name:'Express',mail:'fedidou78@gmail.com',code:req.params.code};res.send(JSON.stringify(infos));
});

app.listen(3000,()=>{
    console.log('Server start');
});
