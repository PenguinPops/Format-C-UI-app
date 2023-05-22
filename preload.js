const {ipcRenderer, contextBridge} = require('electron');
contextBridge.exposeInMainWorld('api', {
    call: () => {ipcRenderer.send('run')},
    onOutput: (callback) => {ipcRenderer.on('output', callback)},
    require: require
});