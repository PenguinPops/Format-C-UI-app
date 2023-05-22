const { app, BrowserWindow, ipcMain } = require('electron');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

app.whenReady().then(() => {
  const win = new BrowserWindow({
    autoHideMenuBar: true,
    height: 620,
    width: 850,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadFile('index.html');

  ipcMain.on('run', (event) => {
    const command = path.join(__dirname, 'FormatC++.exe');
    const childProcess = spawn(command);

    childProcess.on('error', (error) => {
      console.error(error);
    });

    childProcess.on('close', (code) => {
      console.log('run');
    });
  });

  fs.watchFile('./wynik.txt', (curr, prev) => {
    win.webContents.send('output');
  });
});
    
