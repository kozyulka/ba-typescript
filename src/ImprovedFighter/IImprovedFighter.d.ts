import IFighter from "../Fighter/IFighter";

interface IImprovedFighter extends IFighter {
    doubleHit(enemy: IFighter, points: number): void;
}

export default IImprovedFighter;
