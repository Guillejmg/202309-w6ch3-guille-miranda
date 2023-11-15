export abstract class Character {
  name: string;
  family: string;
  age: number;
  isAlive: boolean;
  protected message: string;
  category!: 'Kings' | 'Figther' | 'Advisor' | 'Squire' | '';

  constructor(name: string, family: string, age: number) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.isAlive = true;
    this.message = '';
  }

  talk() {
    return this.message;
  }

  dead() {
    this.isAlive = false;
  }
}
export type CharacterStructure = {
  name: string;
  family: string;
  age: number;
  isAlive: boolean;
  message: string;
  category: 'Kings' | 'Figther' | 'Advisor' | 'Squire' | ''

  kingdomYears?: number;
  skill?: number;
  weapon?: string;
  patron?: CharacterStructure;
  servilityGrade?: number;
  advisorBoss?: CharacterStructure;
}
