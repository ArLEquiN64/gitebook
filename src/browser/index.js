import electron, {app, BrowserWindow} from 'electron';

/*
const crashReporter = electron.crashReporter;
crashReporter.start({companyName: 'ArLE', submitURL: 'https://submit/URL/here'});
*/

let mainWindow;

app.on('window-all-closed', () => {
  if(process.platform != 'darwin'){
    app.quit();
  }
});

function createWindow(){
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL(`file://${__dirname}/../../static/index.html`);

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.on('ready', createWindow);

app.on('activate', () => {
  if(mainWindow === null){
    createWindow();
  }
});
