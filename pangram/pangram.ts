export function isPangram(phrase: string) {
  const phraseLowerCase = phrase.toLowerCase()
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')

  const isPangram = alphabet.every((letter) => phraseLowerCase.includes(letter))

  return isPangram
}
