// MJS 07-23-2020
// Application Entry Point

// express for the webserver 
var express = require('express')
var app = express()

/* Global Actions 
*/

//serve static file 
app.use(express.static('public'))

// http server
var http = require('http').Server(app)
var port = process.env.PORT || 3000 

// default route 
app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/default.html');
});

http.listen(port, function() {
    console.log('listening on *: ' + port);
});