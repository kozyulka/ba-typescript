import Fighter from './Fighter/Fighter';
import ImprovedFighter from './ImprovedFighter/ImprovedFighter';
import fight from './fight';

const fighter = new Fighter("Tolik", 350, 15);
const improvedFighter = new ImprovedFighter("Muhammad Ali", 300, 17);

try {
    fight(fighter, improvedFighter, 9, 15, 9);
} catch(err) {
    const error = err as Error;

    console.log(error);
}

