const Configstore = require('configstore');
const pkg = require('../package.json');

class KeyManager {
    constructor() {
        this.conf = new Configstore();
    }

    setKey(key) {
        this.conf.set('apiKey', key);
        return key;
    }


    getKey() {
        const key = this.conf.get('apiKey');

        if(!key) {
            throw new Error('NO API Key Found');
        }

        return key;
    }

    deleteKey() {
        const key = this.conf.get('apiKey');

        if(!key) {
            throw new Error('NO API Key Found');
        }

        this.conf.delete('apiKey');

        return key;
    }
}

module.exports = KeyManager;