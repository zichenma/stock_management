"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var stock_1 = require("./stock");
var ws_1 = require("ws");
var path = require("path");
var app = express();
// let node go to find upper level of current file (stock_server.ts), client folder
app.use('/', express.static(path.join(__dirname, '..', 'client')));
app.get('/', function (req, res) {
    res.send('Home Page');
    res.json(stock_1.stocks);
});
app.get('/api/stock', function (req, res) {
    // res.json(stocks);
    var result = stock_1.stocks;
    var params = req.query;
    if (params.name) {
        result = result.filter(function (stock) { return stock.name.indexOf(params.name) !== -1; });
        console.log(params);
    }
    res.json(result);
});
app.get('/api/stock/:id', function (req, res) {
    res.json(stock_1.stocks.find(function (stock) { return stock.id == req.params.id; }));
});
var port = 9090;
var server = app.listen(port, 'localhost', function () {
    console.log("Server is runing at http://localhost:" + port);
});
// for demo:
// const wsServer = new Server({port: 9091});
// wsServer.on('connection', websocket => {
//     websocket.send('welcome connect to ws server.');
//     websocket.on('message', message => {
//         console.log(`get message from client: ${message}`);
//     })
// });
// for demo:
// setInterval(() => {
//     if (wsServer.clients) {
//         wsServer.clients.forEach(client => {
//             client.send('This is inverval message');
//         })
//     }
// }, 2000)
// for storing all clients:
var subscription = new Set();
var wsServer = new ws_1.Server({ port: 9091 });
wsServer.on('connection', function (websocket) {
    subscription.add(websocket);
});
var messageCount = 0;
setInterval(function () {
    subscription.forEach(function (ws) {
        // see if this socket is connected (readyState === 1)
        if (ws.readyState === 1) {
            // see if how many messages are sent
            ws.send(JSON.stringify({ messageCount: messageCount++ }));
        }
        else {
            subscription.delete(ws);
        }
    });
}, 3000);
//# sourceMappingURL=stock_server.js.map