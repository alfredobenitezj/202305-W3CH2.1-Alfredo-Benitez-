import { Fighter } from './fighter.js';
import { King } from './king.js';
import { Counselor } from './counselor.js';
import { Squire } from './squire.js';

export const arrayCharacters = () => {
  const charactersContainer = [
    new King('Joffrey', 'Baratheon', 20, 'five', 5),

    new Fighter('Jamie', 'Lannister', 30, 'sword'),

    new Fighter('Daenerys', 'Targaryen', 25, 'axe'),

    new Counselor('Tyrion', 'Lannister', 35, 'Daenerys'),

    new Squire('Bronn', 'Lannister', 40, 'Jamie', 10, 'imaluser'),
  ];

  return charactersContainer;
};
