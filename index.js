const fs = require('node:fs')

const config = fs.readFileSync('./.stylelintrc.json')

module.exports = JSON.parse(config.toString())
