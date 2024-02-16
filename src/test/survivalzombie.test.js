const Survival= require('../survivalzombie')

describe('Survival', () => {
    test('Every survivor should have a Name', ()=> {
        expect(new Survival('pepe')).toMatchObject( {"name": "pepe"});
    })

    test('Each survivor should start with 0 wounds.', ()=> {
        expect(new Survival('maría')).toMatchObject( {"name": "maría", "injured": 0});
    })

    test('A Survivor who receives 2 Wounds should die', ()=> {
        expect(new Survival('juan')).toMatchObject( {"name": "juan", "injured": 3, "alive": false});
    })


})

