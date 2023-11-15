import { Character } from './character';

export class Fighter extends Character {
  skill: number;
  weapon: string;

  constructor(
    name: string,
    family: string,
    age: number,
    weapon: string,
    skill: number
  ) {
    super(name, family, age);
    this.message = 'Primero pego y luego pregunto';
    this.category = 'Figther';
    this.weapon = weapon;
    this.skill = skill;
  }
}
