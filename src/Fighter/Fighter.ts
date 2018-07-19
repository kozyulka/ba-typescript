import IFighter from './IFighter';
import IImprovedFighter from '../ImprovedFighter/IImprovedFighter';

class Fighter {
    name: string;
    health: number;
    private power: number;

    constructor(name: string, health: number, power: number) {
        this.name = name;
        this.health = health;
        this.power = power;
    }

    setDamage(damage:number = 0): void {
        this.health -= damage;

        console.log(`${this.name}'s health is ${this.health}`);
    }

    hit(enemy: IFighter | IImprovedFighter, point: number = 0): void {
        const damage = point * this.power;

        enemy.setDamage(damage);
    }

    knockout(): Promise<void> {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log('Time is over');
                resolve();
            }, 500);
        });
    }
}

export default Fighter;
