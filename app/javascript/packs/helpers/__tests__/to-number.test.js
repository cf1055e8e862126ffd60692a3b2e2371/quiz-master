import toNumber from '../to-number'

describe('[word formats]', () => {
  test('accept lower case and space delimiter', () => {
    expect(toNumber('one thousand two hundred thirty four')).toBe(1234)
  })

  test('accept hiphen delimiter', () => {
    expect(toNumber('one-thousand-two-hundred-thirty-four')).toBe(1234)
  })

  test('accept mixed delimiter', () => {
    expect(toNumber('one-thousand two-hundred thirty-four')).toBe(1234)
  })

  test('accept long delimiter', () => {
    expect(toNumber('one   thousand two hundred thirty---four')).toBe(1234)
  })

  test('accept white spaces', () => {
    expect(toNumber('  one thousand two hundred thirty four ')).toBe(1234)
  })

  test('accept UPPER CASE', () => {
    expect(toNumber('ONE THOUSAND TWO HUNDRED THIRTY FOUR')).toBe(1234)
  })

  test('accept Title Case', () => {
    expect(toNumber('One Thousand Two Hundred Thirty Four')).toBe(1234)
  })
})

describe('[zero]', () => {
  test('accept only one word', () => {
    expect(toNumber('zero')).toBe(0)
  })

  test('not accept more than one word', () => {
    expect(isNaN(toNumber('zero-one'))).toBe(true)
  })
})

describe('[minus]', () => {
  test('accept top of the words', () => {
    expect(toNumber('minus ten thousand')).toBe(-10000)
  })

  test('not accept not top of the words', () => {
    expect(isNaN(toNumber('ten thousand minus'))).toBe(true)
  })
})

describe('[thousands and hundreds]', () => {
  test('accept hundred', () => {
    expect(toNumber('one hundred')).toBe(100)
  })

  test('accept thousand', () => {
    expect(toNumber('one thousand')).toBe(1000)
  })

  test('accept million', () => {
    expect(toNumber('one million')).toBe(1000000)
  })

  test('accept billion', () => {
    expect(toNumber('one billion')).toBe(1000000000)
  })

  test('accept trillion', () => {
    expect(toNumber('one trillion')).toBe(1000000000000)
  })

  test('accept sum of all thousands (max value)', () => {
    const three9 = 'nine hundred ninety nine'
    expect(toNumber(
      `${three9} trillion ${three9} billion ` +
      `${three9} million  ${three9} thousand ${three9}`,
    )).toBe(999999999999999)
  })

  test('accept min value', () => {
    const three9 = 'nine hundred ninety nine'
    expect(toNumber(
      `minus             ${three9} trillion ${three9} billion ` +
      `${three9} million ${three9} thousand ${three9}`,
    )).toBe(-999999999999999)
  })

  test('not accept quadrillion (max+1 value)', () => {
    expect(isNaN(toNumber('one quadrillion'))).toBe(true)
  })

  test('not accept minus quadrillion (max-1 value)', () => {
    expect(isNaN(toNumber('minus one quadrillion'))).toBe(true)
  })

  test('not accept hundred is top', () => {
    expect(isNaN(toNumber('hundred'))).toBe(true)
  })

  test('not accept thousands is top', () => {
    expect(isNaN(toNumber('thousand'))).toBe(true)
  })

  test('accept teen thousands', () => {
    expect(toNumber('ten thousand')).toBe(10000)
  })

  test('accept double figure thousands', () => {
    expect(toNumber('twenty thousand')).toBe(20000)
  })

  test('not accept teen figure hunded', () => {
    expect(isNaN(toNumber('ten hundred'))).toBe(true)
  })

  test('not accept double figure hunded', () => {
    expect(isNaN(toNumber('twenty hundred'))).toBe(true)
  })

  test('not accept no figure between thousands', () => {
    expect(isNaN(toNumber('one million thousand'))).toBe(true)
  })

  test('not accept no figure between hundred and thousand', () => {
    expect(isNaN(toNumber('one thousand hundred'))).toBe(true)
  })

  test('not accept no thousand between hundreds', () => {
    expect(isNaN(toNumber('one hundred one hundred'))).toBe(true)
  })

  test('not accept invalid thousands order', () => {
    expect(isNaN(toNumber('one thousand one million'))).toBe(true)
  })
})

describe('double figures', () => {
  test('accept singles', () => {
    [
      'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
      'nine',
    ].forEach((numberStr, i) => {
      expect(toNumber(numberStr)).toBe((i + 1))
    })
  })

  test('accept teens', () => {
    [
      'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
      'sixteen', 'seventeen', 'eighteen', 'nineteen',
    ].forEach((numberStr, i) => {
      expect(toNumber(numberStr)).toBe((i + 10))
    })
  })

  test('accept teens', () => {
    [
      'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
      'sixteen', 'seventeen', 'eighteen', 'nineteen',
    ].forEach((numberStr, i) => {
      expect(toNumber(numberStr)).toBe((i + 10))
    })
  })

  test('accept doubles', () => {
    [
      'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy',
      'eighty', 'ninety',
    ].forEach((numberStr, i) => {
      expect(toNumber(numberStr)).toBe((i + 2) * 10)
    })
  })

  test('accept double figure + single figure', () => {
    expect(toNumber('twenty one')).toBe(21)
  })

  test('not accept double figure + teen figure', () => {
    expect(isNaN(toNumber('twenty ten'))).toBe(true)
  })

  test('not accept double figure + double figure', () => {
    expect(isNaN(toNumber('twenty thirty'))).toBe(true)
  })

  test('not accept teen figure + single figure', () => {
    expect(isNaN(toNumber('ten one'))).toBe(true)
  })

  test('not accept teen figure + teen figure', () => {
    expect(isNaN(toNumber('ten eleven'))).toBe(true)
  })

  test('not accept teen figure + double figure', () => {
    expect(isNaN(toNumber('ten twenty'))).toBe(true)
  })

  test('not accept single figure + single figure', () => {
    expect(isNaN(toNumber('one two'))).toBe(true)
  })

  test('not accept single figure + teen figure', () => {
    expect(isNaN(toNumber('one ten'))).toBe(true)
  })

  test('not accept single figure + double figure', () => {
    expect(isNaN(toNumber('one twenty'))).toBe(true)
  })

  test('invalid figure', () => {
    expect(isNaN(toNumber('hoge'))).toBe(true)
  })
})
