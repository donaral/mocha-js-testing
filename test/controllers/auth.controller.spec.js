var assert = require('assert');
var authController = require('../../controllers/auth.controller');

describe('AuthController', function () {
    beforeEach(function () {
        console.log('running before each');
        authController.setRoles(['user']);
    });
    describe('isAuthorised', function () {
        it('should return false if not authorised', function(){
            assert.equal(false, authController.isAuthorised('admin'));
        })
        it('should return true if authorised', function(){
            authController.setRoles(['user', 'admin']);
            assert.equal(true, authController.isAuthorised('admin'));
        })
    })
    describe('isAuthorisedAsync', function(){
        it('should return false if not authorised', function(done){
            authController.isAuthorisedAsync('admin',
                function(isAuth){
                    assert.equal(false, isAuth);
                    done();
                });
        })
    })
});