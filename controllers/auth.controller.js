function AuthController(){
    
    var roles;
    function setRoles(role){
        roles = role;
    }

    function isAuthorised(neededRole) {
        return roles.indexOf(neededRole) >= 0;
    }

    function isAuthorisedAsync(neededRole, cb) {
        setTimeout(function(){cb(roles.indexOf(neededRole) >= 0)}, 0);
    }
    function isAuthorisedPromise(neededRole, cb) {
        return new Promise(function(resolve){
            setTimeout(function(){resolve(roles.indexOf(neededRole) >= 0)}, 0);
        });
    }

    function getIndex(req, res) {
        res.render('index');
    }

    return {isAuthorised, isAuthorisedAsync, setRoles, isAuthorisedPromise, getIndex};
}

module.exports = AuthController();