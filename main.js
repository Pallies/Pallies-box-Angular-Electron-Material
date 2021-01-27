"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var frame;
var args = process.argv.slice(1), serve = args.some(function (val) { return val === '--serve'; });
function createWindow() {
    var electronScreen = electron_1.screen;
    var size = electronScreen.getPrimaryDisplay().workAreaSize;
    frame = new electron_1.BrowserWindow({
        x: 0,
        y: 0,
        minWidth: 600,
        minHeight: 680,
        width: size.width,
        height: size.height,
        autoHideMenuBar: serve ? false : true,
        webPreferences: {
            nodeIntegration: true,
            allowRunningInsecureContent: serve ? true : false,
            contextIsolation: false,
            enableRemoteModule: true,
        },
    });
    if (serve) {
        require('electron-reload')(__dirname, {
            electron: require(__dirname + "/node_modules/electron"),
        });
        frame.webContents.openDevTools();
        frame.loadURL('http://localhost:4200');
    }
    else {
        frame.loadFile(path.join(__dirname, 'dist/index.html'));
    }
    return frame;
}
try {
    electron_1.app.on('ready', createWindow);
    electron_1.app.on('window-all-closed', function () {
        if (process.platform !== 'darwin') {
            electron_1.app.quit();
        }
    });
    electron_1.app.on('activate', function () {
        if (frame === null) {
            createWindow();
        }
    });
}
catch (e) { }
//# sourceMappingURL=main.js.map