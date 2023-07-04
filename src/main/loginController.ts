import { app } from 'electron'
import path from 'path'
import fs from 'fs'

export const login = async (password) => {
  const fileName = 'account.json'
  const filePath = path.join(app.getPath('documents'), fileName)
  try {
    let accountData: any = fs.readFileSync(filePath, 'utf-8')
    accountData = JSON.parse(accountData)

    if (accountData.account.password === password) {
      return { status: true, message: 'Succes' }
    } else return { status: false, message: 'Fail' }
  } catch (error) {
    let jsonData = JSON.stringify({ account: { password: '0000' } })
    fs.writeFileSync(filePath, jsonData)
    return { status: true, message: 'Dosya oluşturuldu İlk şifreniz 0000' }
  }
}

export const readSettings = async () => {
  const fileName = 'settings.json'
  const filePath = path.join(app.getPath('documents'), fileName)
  try {
    const settings = fs.readFileSync(filePath, 'utf-8')
    return settings
  } catch (error) {
    console.error('Dosya okuma hatası:', error)
    return null
  }
}
