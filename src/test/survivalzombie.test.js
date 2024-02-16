const Survival= require('../survival')

describe('Survival', () => {
    test('Every survivor should have a Name', ()=> {
        expect(new Survival('pepe')).toMatchObject( {"name": "pepe"});
    })

    test('Each survivor should start with 0 wounds', ()=> {
        expect(new Survival('maría')).toMatchObject( {"name": "maría", "injured": 0});
    })

    test('A Survivor who receives 2 Wounds should die', ()=> {
        expect(new Survival('juan', 2)).toMatchObject( {"name": "juan", "injured": 2, "alive": false});
    })

    test('Each Survivor should start with the ability to perform 3 actions per shift', ()=> {
        expect(new Survival('juan')).toMatchObject( {"name": "juan",  "injured": 0, "alive": true, "actions": 3});
    })

    
    test('Each Survivor can carry up to 5 pieces of Equipment', ()=> {
        expect(new Survival('juan', 0, true, 3 ,["Bate de béisbol", "Sartén", "Katana", "Pistola",
        "Botella de agua"])).toMatchObject( {"name": "juan",  "injured": 0, "alive": true, "actions": 3, equipment: ["Bate de béisbol", "Sartén", "Katana", "Pistola",
        "Botella de agua"]});
    })

})

