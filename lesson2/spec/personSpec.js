describe('Person Unit Tests', function  (){
    var person;
    beforeEach(function  (){
        person = require("../models/")["Person"];
    });
    it('Should run', function  (){
        expect(true).toBe(true);
    });
    it('Should fetch tables', function  (done){
        person.create({name: "Bob"}).then(function  (){
            person.findOne({where: {name: "Bob"}}).then(function  (row){
                console.log('row', row);
                done();
            });
        });

    });
});