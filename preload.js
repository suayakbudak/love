const { contextBridge } = require('electron')

contextBridge.exposeInMainWorld(
  'electronAPI',
  {
    // Add any required API methods here
  }
) 