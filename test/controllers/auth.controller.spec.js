var assert = require('assert');
var authController = require('../../controllers/auth.controller');
var expect = require('chai').expect;
var should = require('chai').should();
var chai = require("chai");
var chaiAsPromised = require("chai-as-promised");
chai.use(chaiAsPromised);
chai.should();
var sinon = require('sinon');

describe('AuthController', function () {
    beforeEach(function settingUpRoles () {
        console.log('running before each');
        authController.setRoles(['user']);
    });
    describe('isAuthorised', function () {

        it('should return false if not authorised', function(){
            var isAuth = authController.isAuthorised('admin');
            expect(isAuth).to.be.false;
        })
        
        it('should return true if authorised', function(){
            authController.setRoles(['user', 'admin']);
            var isAuth = authController.isAuthorised('admin');
            isAuth.should.be.true;
        })
        it('should not allow a get if not authorised');
        it('should allow a get if authorised');
    })
    describe('isAuthorisedAsync', function(){

        it('should return false if not authorised', function (done) {
            authController.isAuthorisedAsync('admin',
                function(isAuth){
                    assert.equal(false, isAuth);
                    done();
                });
        })
        
    })

    describe('isAuthorisedPromise', function(){

        it('should return false if not authorised', function () {
            return authController.isAuthorisedPromise('admin').should.eventually.be.false;
        })
        
    })

    describe('getIndex', function(){
        it('should render index', function(){
            var req = {};
            var res = {
                render: sinon.spy()
            };
            authController.getIndex(req, res);
            res.render.calledOnce.should.be.true;
            res.render.firstCall.args[0].should.equal('index');
        })
    })
});