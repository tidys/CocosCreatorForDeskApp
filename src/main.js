global.Editor = require('./editor.js');
const Window = require('./window.js');
const Server = require('./server.js');
const {app} = require('electron');
app.on('ready', function () {
    Server.initServer(function (url) {
        Window.createMainWindow(url);
    });
});
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
