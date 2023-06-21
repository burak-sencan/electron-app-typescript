import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electron', {
  hello: async () => {
    const filePath = ipcRenderer.invoke('login')
    return filePath
  },

  login: async (password) => {
    try {
      const filePath = await ipcRenderer.invoke('login', password)
      return filePath
    } catch (error) {
      console.error('IPC error:', error)
      throw error
    }
  },

  complateTest: async (data) => {
    try {
      const filePath = await ipcRenderer.invoke('complateTest', data)
      return filePath
    } catch (error) {
      console.error('IPC error:', error)
      throw error
    }
  },

  readSettings: async () => {
    try {
      const settings = await ipcRenderer.invoke('readSettings')
      return settings
    } catch (error) {
      console.error('IPC error:', error)
      throw error
    }
  },

  saveSettings: async (data) => {
    try {
      const result = await ipcRenderer.invoke('saveSettings', data)
      return result
    } catch (error) {
      console.error('IPC error:', error)
      throw error
    }
  },

  saveMethod: async (data) => {
    try {
      const result = await ipcRenderer.invoke('saveMethod', data)
      return result
    } catch (error) {
      console.error('IPC error:', error)
      throw error
    }
  },

  getMethods: async () => {
    try {
      const result = await ipcRenderer.invoke('getMethods')
      return result
    } catch (error) {
      console.error('IPC error:', error)
      throw error
    }
  },

  deleteMethod: async (data) => {
    try {
      const result = await ipcRenderer.invoke('deleteMethod', data)
      return result
    } catch (error) {
      console.error('IPC error:', error)
      throw error
    }
  },

  generateRandomNumber: () => {
    ipcRenderer.send('generateRandomNumber')
  },

  subscribeToRandomNumber: (callback) => {
    ipcRenderer.on('randomNumber', (_event, randomNumber) => {
      callback(randomNumber)
    })
  },

  unsubscribeFromRandomNumber: () => {
    ipcRenderer.removeAllListeners('randomNumber')
  },

  //-----------------
  connect: () => {
    ipcRenderer.send('connect')
  },
  disconnect: () => {
    ipcRenderer.send('disconnect')
  },
  up: () => {
    ipcRenderer.send('up')
  },
  down: () => {
    ipcRenderer.send('down')
  },

  subscribeLoadcell: (callback) => {
    ipcRenderer.on('subscribeLoadcell', (_event, data) => {
      callback(data)
    })
  },
  subscribeElengation: (callback) => {
    ipcRenderer.on('subscribeElengation', (_event, data) => {
      callback(data)
    })
  },
  connectionStatus: (callback) => {
    ipcRenderer.on('connectionStatus', (_event, connectionStatus) => {
      callback(connectionStatus)
    })
  }
  //-----------------
})
