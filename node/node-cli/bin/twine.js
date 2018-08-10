#!/usr/bin/env node

console.log('hello world!')

const CredentialManager = require('../lib/credential-manager')

const creds = new CredentialManager('twine')

async function main () {
  let [key, secret] = await creds.getKeyAndSecret()

  console.log(key, secret)
}

main().catch(console.error)
