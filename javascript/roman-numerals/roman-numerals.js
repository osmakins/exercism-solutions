//
// This is only a SKELETON file for the 'Roman Numerals' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
const arabics = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

export const toRoman = (intNum) => {

  let roman = ''

  if (intNum === 0) {
    return ''
  }

  for (var i = 0; i < romans.length; i++) {
    while (intNum >= arabics[i]) {
      roman += romans[i]
      intNum -= arabics[i]
    }
  }
  return roman;
};
