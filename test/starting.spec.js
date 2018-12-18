var assert = require('assert');
var should = require('chai').should();

describe('basic mocha test', function(){
    it('should deal with objects', function(){
        var obj = {name: 'Duygu', gender: 'female'};
        var objB = {name: 'Duygu', gender: 'female'};

        obj.should.have.property('name').equal('Duygu');
        obj.should.deep.equal(objB);
    });
    it('should allow testing nulls', function(){
        var iAmNull = null;
        should.not.exist(iAmNull);
    })
});