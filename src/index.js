module.exports = function toReadable (number) {
    let list = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety',
        100: 'hundred',
    }
    
if (number === 0) {
    return list[0];
} else {
    let str = '0'.repeat(3 - number.toString().length) + number.toString() 
    let arrayStr = str.toString().split('')
    
    let arrayWithOne = (arrayStr[1] === "1") ? [arrayStr[0] * 100, arrayStr[1] * 10 + arrayStr[2] * 1, 0] : [arrayStr[0] * 100, arrayStr[1] * 10, arrayStr[2] * 1]
    
    let arrayRes = (arrayWithOne[0] > 0) ? [arrayWithOne[0] / 100, 100, arrayWithOne[1], arrayWithOne[2]] : arrayWithOne
    
    let arrayWithoutZero = arrayRes.filter((a) => {
      if (a !== 0) {
        return a
      }
    })
    console.log(arrayWithoutZero)
    let result = arrayWithoutZero.map((a, i) => {
      return list[a]
    })

    return result.join(' ')
 
    }
}

