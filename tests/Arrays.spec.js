import { expect } from "chai";

describe('Arrays', () => {
    describe("#sort", () => {
        if ('Sorting names array', () =>{
            var names = ['Dany', 'Moshe', 'Adam'];
            expect(names.sort()).to.be.eql(['Adam11', 'Dany' ,'Moshe']);
        })
    })
})