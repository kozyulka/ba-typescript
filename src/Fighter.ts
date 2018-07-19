'use strict';

import { IImprovedFighter } from './ImprovedFighter'

interface IFighter {
    name: string;
    health: number;
    power: number;

    setDamage(damage: number): void;
    hit(enemy: IFighter | IImprovedFighter, point: number): void;
    getDamage(point: number): number;
    knockout(): Promise<void>;
}

class Fighter implements IFighter {
    name: string;
    health: number;
    power: number;

    constructor(name: string, health: number, power: number) {
        this.name = name;
        this.health = health;
        this.power = power;
    }

    setDamage(damage = 0) {
        this.health -= damage;

        console.log(`${this.name}'s health is ${this.health}`);
    }

    hit(enemy: IFighter | IImprovedFighter, point = 0) {
        const damage = this.getDamage(point);

        enemy.setDamage(damage);
    }

    getDamage(point = 0) {
        return point * this.power;
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

export {
    IFighter,
    Fighter,
};
