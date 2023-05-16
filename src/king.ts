/* eslint-disable max-params */
export class King {
  name: string;
  family: string;
  age: number;
  status: string;
  regnalyears: number;
  speech: string;

  constructor(
    name: string,
    family: string,
    age: number,
    status: string,
    regnalyears: number
  ) {
    this.name = name;
    this.family = family;
    this.age = age;
    this.status = status;
    this.regnalyears = regnalyears;
    this.speech = "vais a morir todos ";
  }
}
