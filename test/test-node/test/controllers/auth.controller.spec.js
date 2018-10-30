const assert = require('assert');

const authController = require('../../controllers/auth.controller');

describe('AuthController', () => {
  beforeEach(() => {
    authController.setRoles(['user', 'name']);
  });

  console.log('test something');

  describe('simple test', () => {
    // console.log(authController.setRoles(['joshua']));
    it('describes your test here!', () => {
      console.log(authController.isAuthorized('user'));
      console.log('hey');
    });
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
