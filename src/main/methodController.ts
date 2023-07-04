import { app } from 'electron'
import path from 'path'
import fs from 'fs'

export const saveMethod = async (data) => {
  const fileName = `${data.general.name.val}--${data.id.slice(8)}.json`
  const folderPath = path.join(app.getPath('documents'), 'methods')
  const filePath = path.join(folderPath, fileName)
  let jsonData = JSON.stringify(data)

  fs.mkdirSync(folderPath, { recursive: true })
  fs.writeFileSync(filePath, jsonData)

  return filePath
}

export const getMethods = async () => {
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
}
export const deleteMethod = async (data) => {
  const folderPath = path.join(app.getPath('documents'), 'methods')
  const fileName = `${data.general.name.val}--${data.id.slice(8)}.json`
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
}
