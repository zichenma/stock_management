import * as express from 'express';
import { stocks } from './stock';
import { Server } from 'ws';
import * as path from 'path';


const app = express();

// let node go to find upper level of current file (stock_server.ts), client folder

app.use('/', express.static(path.join(__dirname, '..', 'client')))

app.get('/', (req, res) => {
    res.send('Home Page');
    res.json(stocks);
})

app.get('/api/stock', (req, res) => {
    // res.json(stocks);
    let result = stocks;
    let params = req.query;
    if (params.name) {
        result = result.filter(stock => stock.name.indexOf(params.name) !== -1);
        console.log(params);
    }
    res.json(result);
})

app.get('/api/stock/:id', (req, res) => {
    res.json(stocks.find(stock => stock.id == req.params.id));
});

const port = 9090;
const server = app.listen(port, 'localhost', () => {
    console.log(`Server is runing at http://localhost:${port}`);
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
let subscription = new Set<any>();

const wsServer = new Server({port: 9091});
wsServer.on('connection', websocket => {
   subscription.add(websocket);
});

let messageCount = 0;
setInterval(() => {
    subscription.forEach(ws => {
        // see if this socket is connected (readyState === 1)
        if (ws.readyState === 1) {
            // see if how many messages are sent
            ws.send(JSON.stringify({messageCount: messageCount++}));
        } else {
            subscription.delete(ws);
        }
    })
}, 3000)

