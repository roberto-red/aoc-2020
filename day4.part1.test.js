const { countPassports } = require('./day4.part1.js')

describe('count passports', () => {
  it('counts a single valid passport', () => {
    const inputMagico = `ecl:gry pid:860033327 eyr:2020 hcl:#fffffd
byr:1937 iyr:2017 cid:147 hgt:183cm`

    expect(countPassports(inputMagico)).toEqual(1)
  })

  it('does not count invalid passports', () => {
    const inputMagico = `iyr:2013 ecl:amb cid:350 eyr:2023 pid:028048884
hcl:#cfa07d byr:1929`

    expect(countPassports(inputMagico)).toEqual(0)
  })
})
