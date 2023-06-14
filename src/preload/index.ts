import { contextBridge, ipcRenderer } from 'electron'

contextBridge.exposeInMainWorld('electron', {
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
  }
})
