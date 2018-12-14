var assert = require('assert');
var authController = require('../../controllers/auth.controller');

describe('AuthController', function(){
    describe('isAuthorised', function(){
        it('should return false if not authorised', function(){
            authController.setRoles(['user']);
            assert.equal(false, authController.isAuthorised('admin'));
        })
        it('should return true if authorised', function(){
            authController.setRoles(['user', 'admin']);
            assert.equal(true, authController.isAuthorised('admin'));
        })
    })
    describe('isAuthorisedAsync', function(){
        it('should return false if not authorised', function(done){
            this.timeout(2500);
            authController.setRoles(['user']);
            authController.isAuthorisedAsync('admin',
                function(isAuth){
                    assert.equal(false, isAuth);
                    done();
                });
        })
    })
});