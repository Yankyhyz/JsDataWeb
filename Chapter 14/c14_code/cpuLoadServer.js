var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io").listen(server);
var os = require("os");
var osUtils = require("os-utils");
var interval = -1;
var currCPU = 0;

app.use(express.static(__dirname));

server.listen(8080);

io.sockets.on('connection', function () {
    if (interval < 0) {
        interval = setInterval(function () {
            var freeMem = os.freemem();
            var totalMem = os.totalmem();
            io.sockets.emit("cpuUpdate", {
                cpuUsage: currCPU * 100.0,
                freeMem: freeMem,
                totalMem: totalMem,
                usedMem: totalMem - freeMem
            });
        }, 100);
    }
});

function updateCPU() {
    setTimeout(function () {
        osUtils.cpuUsage(function (value) {
            currCPU = value;
            
            updateCPU();
        });
    }, 0);
}
updateCPU();

console.log("computer performance server running");