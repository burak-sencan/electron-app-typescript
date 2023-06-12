import { app, shell, BrowserWindow, ipcMain } from 'electron'
import path, { join } from 'path'
// import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import { electronApp, is, optimizer } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
const fs = require('fs')
let mainWindow: BrowserWindow | null = null
let splash: BrowserWindow

function createWindow(): void {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
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
      }
    }, 500)
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })
  /*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
  /*////////////////////////////////////////// N O D E . J S /////////////////////////////////////////////////////////////// */
  /*//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
  ipcMain.handle('login', async (_event, data) => {
    const fileName = 'account.json'
    const filePath = path.join(app.getPath('documents'), fileName)
    try {
      let account = fs.readFile(filePath, 'utf-8')
      account = JSON.parse(account)
      if (account.password === data) {
        return { status: true, message: 'Succes' }
      } else return { status: false, message: 'Fail' }
    } catch (error) {
      let jsonData = JSON.stringify({ account: { password: '0000' } })
      fs.writeFileSync(filePath, jsonData)
      return { status: true, message: 'Dosya oluşturuldu İlk şifreniz 0000' }
    }
  })

  ipcMain.handle('openFile', async (_event, data) => {
    const fileName = 'example.json'
    const filePath = path.join(app.getPath('documents'), fileName)
    let jsonData = JSON.stringify(data)
    fs.writeFileSync(filePath, jsonData)
    return filePath
  })

  ipcMain.handle('readSettings', async () => {
    const fileName = 'settings.json'
    const filePath = path.join(app.getPath('documents'), fileName)
    try {
      const settings = fs.readFileSync(filePath, 'utf-8')
      return settings
    } catch (error) {
      console.error('Dosya okuma hatası:', error)
      return null
    }
  })

  ipcMain.handle('saveSettings', async (_event, data) => {
    const fileName = 'settings.json'
    const filePath = path.join(app.getPath('documents'), fileName)
    let jsonData = JSON.stringify(data)
    fs.writeFileSync(filePath, jsonData)
    return filePath
  })

  ipcMain.handle('saveMethod', async (_event, data) => {
    const fileName = `${data.definations.name.val}--${data.id.slice(8)}.json`
    const folderPath = path.join(app.getPath('documents'), 'methods')
    const filePath = path.join(folderPath, fileName)
    let jsonData = JSON.stringify(data)

    fs.mkdirSync(folderPath, { recursive: true })
    fs.writeFileSync(filePath, jsonData)

    return filePath
  })

  ipcMain.handle('getMethods', async () => {
    const folderPath = path.join(app.getPath('documents'), 'methods')
    let methods: any[] = [] // Başlangıçta boş bir dizi olarak tanımlanır
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath)
    }
    fs.readdirSync(folderPath).forEach((fileName) => {
      const filePath = path.join(folderPath, fileName)
      const fileContent = fs.readFileSync(filePath, 'utf8')
      const methodObj = JSON.parse(fileContent)
      methods.push(methodObj)
    })

    return methods
  })

  ipcMain.handle('deleteMethod', async (_event, data) => {
    const folderPath = path.join(app.getPath('documents'), 'methods')
    const fileName = `${data.definations.name.val}--${data.id.slice(8)}.json`
    const filePath = path.join(folderPath, fileName)
    const targetFolder = path.join(app.getPath('documents'), 'recovery')
    const targetPath = path.join(app.getPath('documents'), 'recovery', fileName)

    fs.mkdirSync(targetFolder, { recursive: true })

    fs.copyFile(filePath, targetPath, (error) => {
      if (error) {
        console.error('Dosya kopyalanamadı:', error)
        return
      }

      fs.unlink(filePath, (error) => {
        if (error) {
          console.error('Dosya silinemedi:', error)
          return
        }

        console.log('Dosya başarıyla silindi ve kopyalandı.')
        return true
      })
    })
  })

  ipcMain.on('generateRandomNumber', (_event) => {
    setInterval(() => {
      const randomNumber = Math.floor(Math.random() * 100)
      mainWindow?.webContents.send('randomNumber', randomNumber)
    }, 50)

    // Aboneliği sonlandırmak için gerektiğinde clearInterval(interval) çağrılabilir.
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
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

// In this file you can include the rest of your app"s specific main process
// code. You can also put them in separate files and require them here.
