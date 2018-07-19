'use strict';

import { Fighter, IFighter } from './Fighter';
import { ImprovedFighter, IImprovedFighter } from './ImprovedFighter';

const fight = async (fighterOne: IFighter | IImprovedFighter, fighterTwo: IFighter | IImprovedFighter, ...points: number[]) => {
  if (!(fighterOne instanceof Fighter) || !(fighterTwo instanceof Fighter)) {
    throw new Error('Someone is missing! There should be two fighters');
  }

  for (let i = 0; i < points.length; i++) {
    if (i % 2 === 0) {
      if (fighterOne instanceof ImprovedFighter) {
          fighterOne.doubleHit(fighterTwo, points[i]);
      } else {
          fighterOne.hit(fighterTwo, points[i]);
      }

      if (fighterTwo.health <= 0) {
        console.log(`${fighterTwo.name} is dead`);

        return await fighterTwo.knockout();
      }
    } else if (i % 2 === 1) {
      if (fighterTwo instanceof ImprovedFighter) {
          fighterTwo.doubleHit(fighterOne, points[i]);
      } else {
          fighterTwo.hit(fighterOne, points[i]);
      }

      if (fighterOne.health <= 0) {
        console.log(`${fighterOne.name} is dead`);

        return await fighterOne.knockout();
      }
    }
  }

  console.log('Nobody is knocked out');
};

export default fight;
