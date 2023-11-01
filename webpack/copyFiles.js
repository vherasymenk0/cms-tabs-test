const fs = require('fs-extra')

async function copyFiles() {
  try {
    await fs.copy('dist/data', 'build/data')
    console.log('Files copied successfully')
  } catch (err) {
    console.error('Error copying files:', err)
  }
}

copyFiles()
