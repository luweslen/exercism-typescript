export function decodedValue(value: string[]) {
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
    "white"
  ]
  
  return Number(`${colors.indexOf(value[0])}${colors.indexOf(value[1])}`)
}
