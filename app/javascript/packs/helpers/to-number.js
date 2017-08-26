const NUMBER_GROUP = {
  SINGLE: {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  },
  TEEN: {
    ten: 10,
    eleven: 11,
    twelve: 12,
    thirteen: 13,
    fourteen: 14,
    fifteen: 15,
    sixteen: 16,
    seventeen: 17,
    eighteen: 18,
    nineteen: 19,
  },
  DOUBLE: {
    twenty: 20,
    thirty: 30,
    fourty: 40,
    fifty: 50,
    sixty: 60,
    seventy: 70,
    eighty: 80,
    ninety: 90,
  },
  HUNDRED: {
    hundred: 100
  },
  THOUSANDS: [
    'thousand', 'million', 'billion', 'trillion'
  ].reduce((prev, key, index) => (
    Object.assign({}, prev, { [key]: Math.pow(1000, index + 1) })
  ), {})
}

const getValueAndGroup = (numberString) => {
  for (let key of Object.keys(NUMBER_GROUP)) {
    if (NUMBER_GROUP[key][numberString] !== undefined) {
      return [NUMBER_GROUP[key][numberString], key]
    }
  }
  return []
}

// This class validates figures for HUNDRED ( <figure> HUNDRED )
class HundredsValidator {
  constructor() {
    this._groups = []
  }
  
  add(group) {
    this._groups.push(group)
  }

  isValid() {
    return (this._groups.length === 1 && this._groups[0] === 'SINGLE')
  }
}

// This class validates figures for THOUSANDS ( <figures> THOUSAND )
class ThousandsValidator extends HundredsValidator {
  isValid({ allowEmpty }) {
    if (allowEmpty && this._groups.length === 0) { return true }
    return (
      [
        'SINGLE-DOUBLE', 'SINGLE', 'TEEN', 'DOUBLE'
      ].includes(this._groups.join('-'))
    )
  }
}

const toNumber = (s) => {
  const lower = s.toLowerCase().trim()
  const numberStrings = lower.split(/[ \-]+/)
  if (numberStrings[0] === 'zero' && numberStrings.length === 1) {
    return 0
  }
  const isMinus = (numberStrings[0] === 'minus')
  const reversedNumberStrings = (
    isMinus ? numberStrings.slice(1) : numberStrings
  ).reverse()
  let sum = 0
  let multipliedBy = 1
  let validator = new ThousandsValidator()
  const isValid = reversedNumberStrings.every((numberString, i) => {
    let valueAndGroup = getValueAndGroup(numberString)
    if (valueAndGroup.length != 2) { return false }
    let value = valueAndGroup[0]
    let group = valueAndGroup[1]
    switch (group) {
      case 'THOUSANDS':
        if (
          !validator.isValid({ allowEmpty: multipliedBy === 1 }) ||
          multipliedBy >= value
        ) {
          return false
        }
        validator = new ThousandsValidator()
        multipliedBy = value
        break
      case 'HUNDRED':
        if (
          !validator.isValid({ allowEmpty: true }) ||
          Math.log10(multipliedBy) % 3 !== 0
        ) {
          return false
        }
        validator = new HundredsValidator()
        multipliedBy *= 100
        break
      default:
        validator.add(group)
        sum += (value * multipliedBy)
        break
    }
    return true
  }, 0)
  if (!isValid || !validator.isValid({ allowEmpty: false })) {
    return NaN
  }
  return (isMinus ? -sum : sum)
}

export default toNumber