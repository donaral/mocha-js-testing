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

    return {isAuthorised, isAuthorisedAsync, setRoles};
}

module.exports = AuthController();