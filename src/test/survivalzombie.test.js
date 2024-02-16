const Survival= require('../survivalzombie')

describe('Survival', () => {
    test('Every survivor should have a Name', ()=> {
        expect(new Survival('pepe')).toMatchObject( {"name": "pepe"});
    })
})
