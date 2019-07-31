const nacl = require('libsodium-wrappers');
const tweetnacl = require('tweetnacl');
const Signature = require('../src/Signature');

describe('signing module', () => {
  it('provides a verifying key', async () => {
    expect(await Signature.verifyingKey()).toBeDefined()
  })
  it('returns a signed message', async () => {
    const msg = tweetnacl.randomBytes(1024);
    // commented function won't work cause libsodium-wrappers...
    // const msg = nacl.randombytes_buf(1024);
    const signedMsg = await Signature.sign(msg);
    const verifyingKey = await Signature.verifyingKey();
    // same reason as previous function
    // expect(nacl.crypto_sign_open(signedMsg, verifyingKey)).toEqual(msg)
    expect(tweetnacl.sign.open(signedMsg, verifyingKey)).toEqual(msg)
  })
})
