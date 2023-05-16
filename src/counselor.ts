import { Character } from './character';

export class Counselor extends Character {
  characterAdvised;
  communicate: string;

  constructor(
    name: string,
    family: string,
    age: number,
    characterAdvised: string
  ) {
    super(name, family, age, characterAdvised);
    this.characterAdvised = characterAdvised;
    this.communicate = "I think I'll be dying soon";
  }
}
