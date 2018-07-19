'use strict';

import { Fighter, IFighter } from './Fighter';

interface IImprovedFighter extends IFighter {
    doubleHit(enemy: IFighter, points: number): void;
}

class ImprovedFighter extends Fighter implements IImprovedFighter {
    doubleHit(enemy: IFighter, point = 0) {
        this.hit(enemy, point * 2);
    }
}

export {
    IImprovedFighter,
    ImprovedFighter
};
