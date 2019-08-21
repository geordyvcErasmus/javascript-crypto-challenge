//const tweetnacl = require('tweetnacl');
const nacl = require('libsodium-wrappers');
// had to use tweetnacl because libsodium-wrappers is broke.
// sodium.crypto_sign_keypair() would not work as it wasn't recognised.
let keypair = null;
let loadLibsodium = async () => await nacl.ready;

(async () => {
    await loadLibsodium();
    keypair = nacl.crypto_sign_keypair();
})();

async function verifyingKey(){
    //console.log(keypair);
    await loadLibsodium();
    return keypair.publicKey;
}

async function sign(msg){
    await loadLibsodium();
    return nacl.crypto_sign(msg, keypair.privateKey);
}

module.exports.verifyingKey = verifyingKey;
module.exports.sign = sign;