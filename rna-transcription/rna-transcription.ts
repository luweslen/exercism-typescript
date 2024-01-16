export function toRna(dna: string): string {
  const dnaToRns: Record<string, string> = {
    'G': 'C',
    'C': 'G',
    'T': 'A',
    'A': 'U'
  }

  const isNucleotideInvalid = /[^ACGT]/.test(dna)

  if(isNucleotideInvalid) throw new Error('Invalid input DNA.')

  return dna.replace(/[ATCG]/g, n => dnaToRns[n])
}
