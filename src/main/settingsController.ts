import { app } from 'electron'
import path from 'path'
import fs from 'fs'

export const saveSettings = async (data) => {
  const fileName = 'settings.json'
  const filePath = path.join(app.getPath('documents'), fileName)
  let jsonData = JSON.stringify(data)
  fs.writeFileSync(filePath, jsonData)
  return filePath
}
