export class DnDCharacter {
  public strength: number;
  public dexterity: number;
  public constitution: number;
  public intelligence: number;
  public wisdom: number;
  public charisma: number;
  public hitpoints: number;

  constructor() {
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.constitution = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }

  private static rollTheDice(): number{
    return Math.round(Math.random() * 6)
  }

  public static generateAbilityScore(): number {
    const values: number[] = Array(4).fill(0).map(() => DnDCharacter.rollTheDice())

    const minValue = Math.min(...values)
    const minValueIndex = values.indexOf(minValue)

    values.splice(minValueIndex, 1)

    return values.reduce((acc, curr) => acc + curr, 0)
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor((abilityValue - 10) / 2);
  }
}
