const Fs = require('fs');
const Path = require('path');
const Electron = require('electron');

module.exports = {
    _getUserDateDir() {
        let dir = null;
        if (Electron.remote && Electron.remote.app) {
            dir = Electron.remote.app.getPath('userData');
        } else if (Electron && Electron.app) {
            dir = Electron.app.getPath('userData');
        }
        return dir;
    },

    getAppConfigDefaultPath(file) {
        let dir = this._getUserDateDir();
        let savePath = Path.join(dir, file || 'default.json');

        if (!Fs.existsSync(savePath)) {
            Fs.writeFileSync(savePath, '{}');
        }
        // console.log( savePath );
        return savePath;
    }
}
