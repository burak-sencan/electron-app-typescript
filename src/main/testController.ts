import { app } from 'electron'
import path from 'path'
import fs from 'fs'

export const complateTest = async (data) => {
  const fileName = 'test.json'
  const folderPath = path.join(app.getPath('documents'), 'tests')

  const filePath = path.join(folderPath, fileName)
  let jsonData = JSON.stringify(data)

  fs.mkdirSync(folderPath, { recursive: true })
  fs.writeFileSync(filePath, jsonData)
  return filePath
}
