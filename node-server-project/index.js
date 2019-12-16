const express = require('express');
const parser = require('body-parser');
const app = express();
const EventEmitter = require('events');
const os = require('os');

const Stream = new EventEmitter();

app.use(parser.json());
app.use(
    parser.urlencoded({
        extended: true,
    }),
);

app.set('port', 3000);

app.get('/stats', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
    });

    Stream.on('push', (event, data) => {
        res.write('event: ' + String(event) + '\n' + 'data: ' + JSON.stringify(data) + '\n\n');
    });
});

setInterval(() => {
    console.log('new stats are emitted');
    let d = new Date();
    Stream.emit('push', 'stats', {date: d, data: createMsg()});
}, 10000);

function createMsg() {
    msg = {};

    msg.hostname = os.hostname();
    msg.type = os.type();
    msg.platform = os.platform();
    msg.arch = os.arch();
    msg.release = os.release();
    msg.uptime = os.uptime();
    msg.loadaverage = os.loadavg();
    msg.totalmem = os.totalmem();
    msg.freemem = os.freemem();

    return msg;
}

app.listen(app.get('port'), function(){
    console.log("Express server listening on port " + app.get('port'));
})

