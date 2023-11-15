import { Character } from './character';

export class King extends Character {
  kingdomYears: number;

  constructor(name: string, family: string, age: number, years: number) {
    super(name, family, age);
    this.message = 'Vais a morir todos';
    this.kingdomYears = years;
    this.category = 'Kings';
  }
}
