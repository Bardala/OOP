import { HeroPrototype, Warrior, Wizard } from "./designPatterns/prototype/prototype"
import UserAPISingleton from "./designPatterns/singleton/UserAPISingleton"

// IIFE (immediately invoked function expression)
(async () => {
    const userAPISingleton = UserAPISingleton.getInstance()
    userAPISingleton.addUsers(['islam', 'ali'])
    // console.log('group1', await userAPISingleton.getUsers())

    const userAPISingleton2 = UserAPISingleton.getInstance()
    userAPISingleton2.addUsers(['mona'])
    // console.log('After adding Mona', await userAPISingleton.getUsers())

    // prototype
    let wiz: HeroPrototype = new Wizard("Theo");
    let war: HeroPrototype = new Warrior("Mike");

    console.debug(wiz.clone());
    // Wizard { name: 'Unknown', spells: [], health: 100 }

    console.debug(war.clone());
    // Warrior { name: 'Mike', weapon: 'Bare Hands', health: 150 }

})(