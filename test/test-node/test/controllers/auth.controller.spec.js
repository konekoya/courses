const assert = require('assert');

const authController = require('../../controllers/auth.controller');

describe('AuthController', () => {
  beforeEach(() => {
    console.log('before each');

    authController.setRoles(['user']);
  });

  describe('isAuthorized', () => {
    it('should return false if not authorized', () => {
      assert.equal(false, authController.isAuthorized('admin'));
    });

    it('should return true if authorized', () => {
      authController.setRoles(['user', 'admin']);
      assert.equal(true, authController.isAuthorized('admin'));
    });
  });

  describe('isAuthorizedAsync', function() {
    it('should return false if not authorized', function(done) {
      authController.isAuthorizedAsync('admin', isAuth => {
        assert.equal(false, isAuth);
        done();
      });
    });
  });
});
