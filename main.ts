import { app, BrowserWindow, screen } from 'electron';
import * as path from 'path';
import * as url from 'url';
let frame: BrowserWindow;

const args = process.argv.slice(1),
  serve = args.some((val) => val === '--serve');

function createWindow(): BrowserWindow {
  const electronScreen = screen;
  const size = electronScreen.getPrimaryDisplay().workAreaSize;

  frame = new BrowserWindow({
    x: 0,
    y: 0,
    minWidth:600,
    minHeight:680,
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
      electron: require(`${__dirname}/node_modules/electron`),
    });

    frame.webContents.openDevTools();
    frame.loadURL('http://localhost:4200');
  } else {
    frame.loadFile(path.join(__dirname, 'dist/index.html'));
  }

  return frame;
}

try {
  app.on('ready', createWindow);

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    if (frame === null) {
      createWindow();
    }
  });

} catch (e) {}
