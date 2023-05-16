import { Character } from './character';

export class Squire extends Character {
  knight;
  pelotismo;
  communicate: string;

  constructor(
    name: string,
    family: string,
    age: number,
    knight: string,
    pelotismo: number,
    communicate: string
  ) {
    super(name, family, age, communicate);
    this.knight = knight;
    this.pelotismo = pelotismo;
    this.communicate = "I'm a loser";
  }
}
