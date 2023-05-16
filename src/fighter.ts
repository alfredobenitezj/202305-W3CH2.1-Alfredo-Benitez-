export class Fighter {
  name: string;
  family: string;
  age: number;
  status: string;
  weapon: boolean;
  speech: string;
  constructor(name: string, family: string, age: number, status: string) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.status = status;
    this.weapon = 0 < 10;
    this.speech = "Primero pego y luego pregunto";
  }
}
