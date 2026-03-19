const { app, BrowserWindow } = require('electron')
const path = require('path')

// Suppress GPU cache warnings
app.commandLine.appendSwitch('ignore-gpu-blacklist')
app.commandLine.appendSwitch('disable-gpu-process-crash-limit')

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      webSecurity: true
    },
    // Remove frame and make it clean
    frame: false,
    transparent: true,
    resizable: false,
    center: true,
    show: false, // Don't show until ready
    titleBarStyle: 'hidden',
    titleBarOverlay: false
  })

  // Show window when ready to avoid flickering
  win.once('ready-to-show', () => {
    win.show()
  })

  win.loadFile('love letter 2.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
}) 