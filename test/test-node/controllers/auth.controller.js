function AuthController() {
  var roles;

  function setRoles(role) {
    roles = role;
  }

  function isAuthorized(neededRole) {
    console.log('isAuthorized Roles', roles);

    return roles.indexOf(neededRole) >= 0;
  }

  function isAuthorizedAsync(neededRole, cb) {
    setTimeout(() => {
      cb(roles.indexOf(neededRole) >= 0);
    }, 0);
  }

  console.log('Roles', roles);

  return { isAuthorized, isAuthorizedAsync, setRoles };
}

module.exports = AuthController();
