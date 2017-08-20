const NUMBER_GROUP = {
  MINUS: {
    minus: -1,
  },
  ZERO: {
    zero: 0,
  },
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
    nignteen: 19,
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
  THOUSANDS: {
    thousand:    1000,
    million:     1000000,
    billion:     1000000000,
    trillion:    1000000000000,
    quadrillion: 1000000000000000,
  }
}
const numberGroupHelper = {
  getValueAndGroup: (numberString) => {
    for (let key of Object.keys(NUMBER_GROUP)) {
      if (NUMBER_GROUP[key][numberString] !== undefined) {
        return [NUMBER_GROUP[key][numberString], key]
      }
    }
    return []
  },
  nextOf: {
    MINUS: ['SINGLE', 'TEEN', 'DOUBLE'],
    ZERO: [],
    SINGLE: ['HUNDRED', 'THOUSANDS'],
    TEEN: ['HUNDRED', 'THOUSANDS'],
    DOUBLE: ['SINGLE', 'HUNDRED', 'THOUSANDS'],
    HUNDRED: ['SINGLE', 'TEEN', 'DOUBLE', 'THOUSANDS'],
    THOUSANDS: ['SINGLE', 'TEEN', 'DOUBLE'],
  },
  allowTop: group => (!['HUNDRED', 'THOUSANDS'].includes(group)),
  allowEnd: group => (group !== 'MINUS')
}

const toNumber = (s) => {
  const lower = s.toLowerCase()
  const separatedStringNumbers = lower.replace(/ /g, '-').split('-')
  let headNumber
  let sum = 0
  let allowHundred = true
  let allowUnder = Number.MAX_SAFE_INTEGER
  let preGroup
  for (let sNum of separatedStringNumbers) {
    let valueAndGroup = numberGroupHelper.getValueAndGroup(sNum)
    let value = valueAndGroup[0]
    let group = valueAndGroup[1]
    // 一度出たら、thousandsが出るまで出れない
    if (!allowHundred && group === 'HUNDRED') { return NaN }
    // 一度出たthousands以上の値は出れない
    if (allowUnder <= value) { return NaN }
    if (!preGroup && !numberGroupHelper.allowTop(group)) {
      return NaN
    }
    if (preGroup && !numberGroupHelper.nextOf[preGroup].includes(group)) {
      return NaN
    }
    switch (group) {
      case 'MINUS':
        headNumber = value
        break
      case 'SINGLE':
      case 'TEEN':
      case 'DOUBLE':
        if (preGroup === 'MINUS') {
          headNumber = headNumber * value
        } else if (['HUNDRED', 'THOUSANDS'].includes(preGroup)) {
          sum += headNumber
          headNumber = value
        } else {
          headNumber = (headNumber === undefined) ? value : headNumber + value
        }
        break
      case 'HUNDRED':
        allowHundred = false
        headNumber = headNumber * value
        break
      case 'THOUSANDS':
        allowHundred = true
        allowUnder = value
        headNumber = headNumber * value
        break
    }
    preGroup = group
  }
  if (!numberGroupHelper.allowEnd(preGroup)) {
    return NaN
  }
  return (headNumber) ? sum + headNumber : sum
}

export default toNumber
