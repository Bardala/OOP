export interface HeroPrototype {
    clone(): HeroPrototype; // this method returns a copy of the object
}

export interface Spell {
    name: string;
}

export class Wizard implements HeroPrototype {
    private spells: Spell[];
    private health: number;
    constructor(private name: string) {
        this.spells = [];
        this.health = 100;
    }

    clone(): Wizard {
        const cloned = Object.create(Wizard.prototype || null);
        Object.getOwnPropertyNames(this).map((key: string) => {
            if (key === "name") {
                cloned[key] = "Unknown";
            } else {
                cloned[key] = this[key];
            }
        });

        return cloned; // return the cloned object
    }
}

export class Warrior implements HeroPrototype {
    private weapon: string;
    private health: number;
    constructor(private name: string) {
        this.weapon = "Dagger";
        this.health = 150;
    }

    clone(): Warrior {
        const cloned = Object.create(Warrior.prototype || null);
        Object.getOwnPropertyNames(this).map((key: string) => {
            if (key === "weapon") {
                cloned[key] = "Bare Hands";
            } else {
                cloned[key] = this[key];
            }
        });

        return cloned;
    }
}

// let wiz: HeroPrototype = new Wizard("Theo"); // create a Wizard object with name "Theo"
// let war: HeroPrototype = new Warrior("Mike"); // create a Warrior object with name "Mike"

// console.debug(wiz.clone()); // clone the Wizard object and print it
// // Wizard { name: 'Unknown', spells: [], health: 100 }

// console.debug(war.clone()); // clone the Warrior object and print it
// // Warrior { name: 'Mike', weapon: 'Bare Hands', health: 150 }
