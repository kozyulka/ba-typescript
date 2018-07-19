import IImprovedFighter from '../ImprovedFighter/IImprovedFighter';

interface IFighter {
    name: string;
    health: number;

    setDamage(damage: number): void;
    hit(enemy: IFighter | IImprovedFighter, point: number): void;
    knockout(): Promise<void>;
}

export default IFighter;
