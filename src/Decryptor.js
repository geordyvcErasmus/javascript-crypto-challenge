const sodium = require('libsodium-wrappers');
let key = null;

async function setKey(keym){
    key = keym;
}

async function decrypt(ciphertext, nonce){
    // will fail if this is not here, needs a custom exception
    if(key === null){
        throw 'no key';
    }
    return sodium.crypto_secretbox_open_easy(ciphertext, nonce, key);
}

module.exports.setKey = setKey;
module.exports.decrypt = decrypt;
