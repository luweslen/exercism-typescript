export function hey(message: string): string {
  const messageWithoutEmptySpace = message.trim()
  const isQuestion = messageWithoutEmptySpace.substring(messageWithoutEmptySpace.length - 1) === '?'
  const isUpperCase = messageWithoutEmptySpace == messageWithoutEmptySpace.toUpperCase()
  const isSilence = !messageWithoutEmptySpace
  const containLetter = /[a-zA-Z]/g.test(messageWithoutEmptySpace)

  if(isSilence) {
    return 'Fine. Be that way!'
  }

  if(isUpperCase && isQuestion && containLetter) {
    return "Calm down, I know what I'm doing!"
  }
  
  if(isQuestion) {
    return 'Sure.'
  }

  if(isUpperCase && containLetter) {
    return 'Whoa, chill out!'
  }

  return 'Whatever.'
}
