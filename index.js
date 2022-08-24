const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

var port = 3000;
app.listen(port, function(){
    console.log('server on! http://localhost:'+port);
})