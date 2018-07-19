import Fighter from '../Fighter/Fighter';
import IFighter from '../Fighter/IFighter';

class ImprovedFighter extends Fighter {
    doubleHit(enemy: IFighter, point: number = 0) {
        this.hit(enemy, point * 2);
    }
}

export default ImprovedFighter;
