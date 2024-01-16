export function decodedResistorValue([one, two, three]: string[]) {
  const colors = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "violet",
    "grey",
    "white",
  ]

  const colorOneValue = colors.indexOf(one)
  const colorTwoValue = colors.indexOf(two)
  const colorThreeValue = colors.indexOf(three)

  const value = `${colorOneValue !== 0 ? colorOneValue : ''}${colorTwoValue}${colorThreeValue > 0 ? "0".repeat(colorThreeValue) : ''}`

  const exponentsPrefix: Record<number, string> = {
    3: 'kilo',
    6: 'mega',
    9: 'giga',
  }

  const getZeros = value.match(/[0]*$/)
  const countZeros = getZeros ? getZeros[0].length : 0
  const zerosGroupThree = countZeros - (countZeros % 3)

  const suffix = `${zerosGroupThree in exponentsPrefix ? exponentsPrefix[zerosGroupThree] : ''}ohms`
  
  return `${value.substring(
    0,
    value.length - zerosGroupThree
  )} ${suffix}`
}
