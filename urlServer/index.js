const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

// Create new Express Server
const app = express();
const server = require('http').Server(app);
var expressWs = require('express-ws')(app, server);

// Server Configuration
const PORT = 8080;

let currentState = 'wait';
let tmpCurrentState = '';

// Support JSON encoded POST request bodies
app.use(bodyParser.json());

// POST Example
app.post('/sendUrl', (req, res) => {
    currentState = req.body.url.slice(req.body.url.indexOf('=')+1);
    res.send('POST Hello!');
});

app.get('/urlSender', (req, res) => {
    res.sendFile(__dirname + '/test.html');
});

app.ws('/', function(ws, req) {
    ws.on('message', function() {
        ws.send(currentState);
        console.log('socket open');
    });
    setInterval(()=>{
        if (currentState !== tmpCurrentState){
            ws.send(currentState);
            tmpCurrentState = currentState;
        }
    }, 1)
});

// Start the Server
server.listen(PORT, () => {
    console.log(`[-] Server Listening on Port ${PORT}`);
});