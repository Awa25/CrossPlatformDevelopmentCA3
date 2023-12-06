// For launching new Renderer processes by running app, browserWindow, Tray, Menu.
const { app, BrowserWindow, Tray, Menu } = require('electron');

// Path module
//const path = require('path');

// Toolbar icon.
//const iconPath = path.join(__dirname, './src/img/iconTemplate.png');
// const iconPath = process.platform !== 'darwin'
// ? 'build/icons/icon.icns'
// : 'build/icons/icon.ico';

// let tray;
let mainWindow;

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
  // eslint-disable-line global-require
  app.quit();
}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', () => {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    // Not allow the user to change the size of window.
    resizable: false,
    // Set width, height and title of the window.
    width: 600,
    height: 600,
    // Toolbar icon
    //icon: path.join(__dirname, iconPath),
    icon: __dirname + './build/icons/icon.icns',
    // Set title.
    title: "Electricity Users Desktop Application - 2020044, 2020443",
    autoHideMenuBar: true,
    webPreferences: { 
      backgroundThrottling: false,
      // Set to use API of node js in the page.
      nodeIntegration: true,
      contextIsolation: false,
      //worldSafeExecutJavaScript: true,
      //preload: path.join(app.getAppPath(), 'preload.js')
     }
  });

  // And load the index.html of the app.
  mainWindow.loadURL(`file://${__dirname}/index.html`);

  // Create Tray - toolbar icon.
  //tray = new Tray(iconPath);

  // Tips when the mouse is over the system tray icon.
 // tray.setToolTip('ElectricityUsers');

  //Define the right menu of tray.
  // tray.on('right-click', () => {
  //   const menuConfig = Menu.buildFromTemplate([
  //     {
  //       label: 'Quit',
  //       click: () => app.quit()
  //     }
  //   ])
  //   tray.popUpContextMenu(menuConfig);
  // })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
