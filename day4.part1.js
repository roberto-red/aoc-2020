const fs = require('fs')
const path = require('path')

const input = fs.readFileSync(path.join(__dirname, 'day4.input.txt'), 'utf-8')

const isValidPassport = passport => passport.includes('hgt')
  && passport.includes('byr')
  && passport.includes('ecl')

const countPassports = (input) => {
  const passports = input.split('\n\n')

  return passports.filter(isValidPassport).length
}

module.exports = {
  countPassports,
}
