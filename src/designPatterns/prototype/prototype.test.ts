import { Warrior, Wizard } from "./prototype"

test('It creates Wizard from a prototype', () => {
    let wiz = new Wizard("Theo")
    expect(wiz).toBeInstanceOf(Wizard)
    expect(JSON.stringify(wiz.clone())).toBe('{"name":"Unknown","spells":[],"health":100}')
})

test('It creates a Warrior from a prototype', () => {
    let war = new Warrior('Alex')
    expect(war).toBeInstanceOf(Warrior)
    expect(JSON.stringify(war.clone())).toBe('{"name":"Alex","weapon":"Bare Hands","health":150}')
})

