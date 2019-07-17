const Electron = require('electron');
const BrowserWindow = Electron.BrowserWindow;
const Profile = require('./profile.js');
const Chokidar = require('chokidar');
const Path = require('path');
const Fs = require('fs');

module.exports = {
    createMainWindow: function (url) {
        let win = this._createWindow({
            title: '游戏窗口',
            url: url,
            devtools: true,
            profile: 'main-window.json',
            autoReload: true,
            watchDir: Path.join(__dirname),
            closeCallBack: function () {

            }
        })
    },
    _createWindow(options) {
        if (!options.profile) {
            return;
        }
        let profilePath = Editor.getAppConfigDefaultPath(options.profile);
        let profile = new Profile(profilePath);
        let width = 850;
        let height = 680;
        let screenSize = Electron.screen.getPrimaryDisplay().size;
        let x = screenSize.width / 2 - width / 2;
        let y = screenSize.height / 2 - height / 2;
        if (profile.data) {
            width = profile.data.width || width;
            height = profile.data.height || height;
            x = profile.data.x || x;
            y = profile.data.y || y;
        }
        let win = new BrowserWindow({
            width: width,
            height: height,
            x: x,
            y: y,
            title: options.title || '',
            parent: options.parent || null,
            modal: !!options.modal,
            resizable: true,
            webPreferences: {
                webSecurity: false,
                nodeIntegration: true, // 允许在渲染进程使用node特性
            },
            backgroundColor: '#ffffff'
        });
        if (options.html) {
            let indexFile = options.html;
            if (!Fs.existsSync(indexFile)) {
                indexFile = Path.join(__dirname, '../static/404.html');
            }
            win.loadFile(indexFile);
        } else if (options.url) {
            win.loadURL(options.url);
        } else {
            return;
        }
        win.show();
        if (options.devtools) {
            win.openDevTools();
        }
        win.on('resize', function (win) {
            let size = win.sender.getSize();
            profile.saveWithObjectData({
                width: size[0],
                height: size[1]
            });
        });
        win.on('close', (event) => {
            let window = event.sender;
            let pos = win.getPosition();
            profile.saveWithObjectData({
                x: pos[0],
                y: pos[1]
            });

            options.closeCallBack && options.closeCallBack();
        });
        if (options.autoReload) {
            this.watchReload(win, options.watchDir);
        }
    },
    watchReload(window, dir) {
        let watcher = Chokidar.watch(dir);
        let timer = null;
        watcher.on('all', function (event, file, state) {
            if (event === 'change') {
                console.log(`${event}:  ${file}`);
                clearTimeout(timer);
                timer = setTimeout(function () {
                    if (window && !window.isDestroyed()) {
                        window.reload();
                    }
                }, 1000);
            }
        });
    },
}
