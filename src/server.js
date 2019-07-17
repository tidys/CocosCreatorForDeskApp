const Express = require('express');
const Path = require('path');
const Fs = require('fs');
module.exports = {
    _isInit: false,
    server: null,
    url: null,
    _launchCB: null,
    initServer(launchCB) {
        if (this._isInit === false) {
            this._isInit = true;
            this._launchCB = launchCB;
            this.probe(4101, this._onFindPort.bind(this));
        }

    },
    _startServer(port) {
        let App = Express();
        App.use(Express.static(Path.join(__dirname, '../game')));

        // App.get('/', function (req, res) {
        //     let file = Path.join(__dirname, '../game/index.html');
        //     res.sendFile(file);
        // });

        let server = App.listen(port, 'localhost', function () {
            let host = server.address().address;
            let port = server.address().port;
            this.url = `http://${host}:${port}`;
            console.log(`预览服务访问地址 ${this.url}`);
            this._launchCB && this._launchCB(this.url);
        }.bind(this))
        this.server = server;
    },

    _onFindPort(bl, port) {
        if (bl) {
            console.log('端口被占用:' + port);
            this.probe(port + 1, this._onFindPort.bind(this));
        } else {
            this._startServer(port);
        }
    },
    probe(port, callback) {
        let net = require('net');

        // tcp使用端口0表示系统分配端口
        let server = net.createServer().listen(port);
        server.on('listening', function () {
            server.once('close', function () {
                callback(false, port);
            });
            server.close();
        });
        server.on('error', function (err) {
            callback(true, port);
        });
    },

}
