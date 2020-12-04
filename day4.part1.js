const fs = require('fs')
const path = require('path')

const input = fs.readFileSync(path.join(__dirname, 'day4.input.txt'), 'utf-8')

const countPassports = (input) => {
  return input.includes('hgt') ? 1 : 0
}

module.exports = {
  countPassports,
}
