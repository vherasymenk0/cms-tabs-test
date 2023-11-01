const fs = require('fs-extra')

async function copyFiles() {
  try {
    await fs.copy('dist/data', 'build/data')
    await fs.copy('dist/favicon.ico', 'build/favicon.ico')
    console.log('Files copied successfully')
  } catch (err) {
    console.error('Error copying files:', err)
  }
}

copyFiles()
