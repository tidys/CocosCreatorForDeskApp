const Fs = require('fs');
const Path = require('path');
const JsonFormat = require('json-format');


class Profile {
    constructor(file) {
        this.data = null;
        this.file = file;
        this.vaild = this.load(file);
    }

    load(file) {
        if (!Fs.existsSync(file)) {
            return false;
        }

        let data = Fs.readFileSync(file, 'utf-8');
        try {
            this.data = JSON.parse(data);
        } catch (e) {
            this.data = null;
            return false;
        }
        return true;
    }

    saveItem(key, value) {
        if (!this.vaild) {
            console.log('save failed');
            return;
        }
        this.data[key] = value;
        Fs.writeFileSync(this.file, JSON.stringify(this.data));
    }

    // 保存object类型的数据
    saveWithObjectData(data) {
        if (!this.vaild) {
            console.log('save failed');
            return;
        }
        for (let key in data) {
            this.data[key] = data[key];
        }

        // Fs.writeFileSync( this.file, JSON.stringify( this.data ) );
        Fs.writeFileSync(this.file, JsonFormat(this.data));
    }

    // 保存array类型的数据
    saveWithArrayData(data) {
        if (!this.vaild) {
            console.log('save failed');
            return;
        }
        this.data = data;

        // Fs.writeFileSync( this.file, JSON.stringify( this.data ) );
        Fs.writeFileSync(this.file, JsonFormat(this.data));
    }
}

module.exports = Profile;
