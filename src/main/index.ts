import { app, shell, BrowserWindow, ipcMain, powerSaveBlocker } from 'electron'
import { join } from 'path'
import { electronApp, is, optimizer } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'

import Modbus from 'modbus-serial'
import { login, readSettings } from './loginController'
import { deleteMethod, getMethods, saveMethod } from './methodController'
import { saveSettings } from './settingsController'
import { complateTest } from './testController'
import { down, setEncoderZero, up } from './machineController'

let mainWindow: BrowserWindow | null = null
let splash: BrowserWindow
let powerSaveBlockerEl
let client
let mode: string

function createWindow(): void {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    // fullscreen: true,
    center: true,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      nodeIntegration: true
    }
  })

  // create a new `splash`-Window
  splash = new BrowserWindow({
    width: 900,
    height: 600,
    transparent: true,
    frame: false,
    alwaysOnTop: true
  })

  splash.on('ready-to-show', () => {
    splash.show()
  })

  mainWindow.on('ready-to-show', () => {
    setTimeout(() => {
      splash.destroy()
      if (mainWindow) {
        mainWindow.show()
        mainWindow.maximize()
      }
    }, 20)
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })
  /*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
  /*////////////////////////////////////////// N O D E . J S /////////////////////////////////////////////////////////////// */
  /*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
  function read() {
    client
      .readHoldingRegisters(37768, 11)
      .then((data) => {
        mainWindow?.webContents.send('subscribeLoadcell', data)
        if (mode === 'up') up(client)
        else if (mode === 'down') down(client)
        else if (mode === 'setEncoderZero') setEncoderZero(client)
        mode = ''
      })
      .catch((err) => {
        console.error('Modbus read error:', err)
      })
      .finally(() => {
        setTimeout(read, 3000)
      })
  }

  //starting
  ipcMain.handle('login', (_event, password) => {
    return login(password)
  })
  ipcMain.handle('readSettings', async () => {
    return readSettings()
  })

  //settings
  ipcMain.handle('saveSettings', async (_event, data) => {
    return saveSettings(data)
  })

  //methods
  ipcMain.handle('saveMethod', async (_event, data) => {
    return saveMethod(data)
  })
  ipcMain.handle('getMethods', async () => {
    return getMethods()
  })
  ipcMain.handle('deleteMethod', async (_event, data) => {
    deleteMethod(data)
  })

  ipcMain.handle('complateTest', async (_event, data) => {
    return complateTest(data)
  })

  ipcMain.on('connect', () => {
    client = new Modbus()

    client.on('connect', () => {
      console.log('Modbus connection established.')
      console.log('Connection status:', client.isOpen)
    })
    // open connection to a serial port
    client.connectAsciiSerial(
      'COM3',
      {
        baudRate: 9600,
        parity: 'even',
        stopBits: 1,
        dataBits: 7
      },
      (err) => {
        read()
        if (err) {
          console.error('Modbus connection error:', err)
          mainWindow?.webContents.send('connectionStatus', client.isOpen)
        } else {
          console.log('Modbus connection established. Connection status:', client.isOpen)
          mainWindow?.webContents.send('connectionStatus', client.isOpen)
        }
      }
    )

    client.setID(1)
    // client.setTimeout(1000)
  })
  ipcMain.on('disconnect', () => {
    client.close()
    mainWindow?.webContents.send('connectionStatus', client.isOpen)
  })

  ipcMain.on('up', () => {
    mode = 'up'
  })
  ipcMain.on('down', () => {
    mode = 'down'
  })
  ipcMain.on('setEncoderZero', () => {
    mode = 'setEncoderZero'
  })

  /*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
  /*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
  /*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */

  //HMR for renderer base on electron-vite cli.
  //Load the remote URL for development or the local html file for production.
  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    splash.loadFile(join(__dirname, '../../src/renderer/splash.html'))
    splash.center()
    mainWindow.webContents.openDevTools()
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    splash.loadFile(join(__dirname, '../renderer/splash.html'))
    splash.center()
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // Set app user model id for windows
  electronApp.setAppUserModelId('com.electron')
  powerSaveBlockerEl = powerSaveBlocker.start('prevent-display-sleep')

  // prevent second instance run
  // requestSingleInstanceLock returns true when only run one instance
  if (!app.requestSingleInstanceLock()) {
    app.quit()
    process.exit(0)
  } else {
    createWindow()
  }

  // Default open or close DevTools by F12 in development
  // and ignore CommandOrControl + R in production.
  // see https://github.com/alex8088/electron-toolkit/tree/master/packages/utils
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  app.on('second-instance', () => {
    if (mainWindow) {
      // Focus on the main window if the user tried to open another
      if (mainWindow.isMinimized()) mainWindow.restore()
      mainWindow.focus()
    }
  })
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  powerSaveBlocker.stop(powerSaveBlockerEl)
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
