import { Character } from './character';

export class Advisor extends Character {
  advisorBoss: Character;

  constructor(
    name: string,
    family: string,
    age: number,
    advisorBoss: Character
  ) {
    super(name, family, age);
    this.category = 'Advisor';
    this.advisorBoss = advisorBoss;
  }
}
