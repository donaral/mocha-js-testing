function AuthController(){
    
    function isAuthorised(roles, neededRole) {
        return roles.indexOf(neededRole) >= 0;
    }

    function isAuthorisedAsync(roles, neededRole, cb) {
        setTimeout(function(){cb(roles.indexOf(neededRole) >= 0)}, 2100);
    }

    return {isAuthorised, isAuthorisedAsync};
}

module.exports = AuthController();