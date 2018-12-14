var assert = require('assert');
var authController = require('../../controllers/auth.controller');

describe('AuthController', function(){
    describe('isAuthorised', function(){
        it('should return false if not authorised', function(){
            assert.equal(false, authController.isAuthorised(['user'], 'admin'));
        })
        it('should return true if not authorised', function(){
            assert.equal(true, authController.isAuthorised(['user', 'admin'], 'admin'));
        })
    })
    describe('isAuthorisedAsync', function(){
        it('should return false if not authorised', function(done){
            this.timeout(2500);
            authController.isAuthorisedAsync(['user'], 'admin',
                function(isAuth){
                    assert.equal(false, isAuth);
                    done();
                });
        })
    })
});