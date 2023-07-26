export function traductionPosition(namePosition: string) {
  if (namePosition === 'Goalkeeper') {
    return 'Goleiro'
  }
  if (namePosition === 'Defender') {
    return 'Defensor'
  }
  if (namePosition === 'Midfielder') {
    return 'Meio-campo'
  }
  if (namePosition === 'Attacker') {
    return 'Atacante'
  }
}