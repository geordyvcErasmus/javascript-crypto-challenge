const tweetnacl = require('tweetnacl');
// had to use tweetnacl because libsodium-wrappers is broke.
// sodium.crypto_sign_keypair() would not work as it wasn't recognised.
let keypair = tweetnacl.sign.keyPair();

async function verifyingKey(){
    console.log(keypair);
    return keypair.publicKey;
}

async function sign(msg){
    return tweetnacl.sign(msg, keypair.secretKey);
}

module.exports.verifyingKey = verifyingKey;
module.exports.sign = sign;