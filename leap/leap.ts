export function isLeap(year: number) {
  const isDivideBy4 = (year % 4) === 0 
  const isDivideBy100 = (year % 100) === 0 
  const isDivideBy400 = (year % 400) === 0

  return (isDivideBy4 && !isDivideBy100) || isDivideBy400
}
