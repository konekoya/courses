const chai = require('chai')
const { expect } = require('chai')
const sinon = require('sinon')
const dirtyChai = require('dirty-chai')
const inquirer = require('inquirer')
const CredentialManager = require('../lib/credential-manager')

chai.use(dirtyChai)

describe('a credential manager', () => {
  var creds

  beforeEach(() => {
    creds = new CredentialManager('twine-test')
  })

  context('with no existing credentials', () => {
    it('should prompt the user', async () => {
      sinon.stub(inquirer, 'prompt').resolves({ key: 'foo', secret: 'bar' })

      let [key, secret] = await creds.getKeyAndSecret()
      expect(key).to.equal('foo')
      expect(secret).to.equal('bar')
      expect(inquirer.prompt.calledOnce).to.be.true()
      inquirer.prompt.restore()
    })
  })

  context('with existing credentials', () => {
    it('should just return them', async () => {
      let [key, secret] = await creds.getKeyAndSecret()
      expect(key).to.equal('foo')
      expect(secret).to.equal('bar')
    })
  })

  after(() => {
    creds.conf.delete('apiKey')
    creds.conf.delete('apiSecret')
  })
})
