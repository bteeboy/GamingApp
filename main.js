const path = require('path');
const { app, BrowserWindow, Menu } = require('electron');

// Create the main window
const isDev = process.env.NOTE_ENV !== 'production';
const isMac = process.platform === 'darwin'; 
let windows = new Set();
let mainWindow;

function createMainWindow() {
    mainWindow = new BrowserWindow({
        title: 'ACCFuelCalculator',
        width: 600, 
        height: 400,
        icon: path.join(__dirname, 'carGas.jpg'),
        webPreferences: {
            // nodeIntegration: true, 
            preload: path.join(__dirname, 'preload.js')
        }
    });
    windows.add(mainWindow)
    mainWindow.loadFile(path.join(__dirname, 'renderer','index.html'));
    // mainWindow.setAlwaysOnTop(true, "normal")
    // mainWindow.loadFile('index.html')
}

app.whenReady().then(() => {
    createMainWindow();

    //Implement menu
    const mainMenu = Menu.buildFromTemplate(menu)
    Menu.setApplicationMenu(mainMenu)
//if there is no windows, it creates a window (or something about macs)
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
          createMainWindow()
        }
      })
})

//Menu template
const menu = [
    {
        label: 'File',
        submenu: [
            {
                label: 'Quit',
                click: () => app.quit(),
                accelerator: 'CmdOrCtl+W'
            },  
            {
                label: 'Open Dev Tools',
                accelerator: "CmdOrCtrl+D",
                click() {
                    mainWindow.webContents.openDevTools();                    
                }
            },  
            {
                label: 'Float App',
                accelerator: "CmdOrCtrl+F",
                click() {
                    mainWindow.setAlwaysOnTop(true, "normal")                   
                }
            },  
            {
                label: 'UnFloat App',
                accelerator: "CmdOrCtrl+G",
                click() {
                    mainWindow.setAlwaysOnTop(false, "normal")                   
                }
            }

        ]
    }
]

// terminates the app when you close the window
app.on('window-all-closed', () => {
    if (!isMac) app.quit()
  })