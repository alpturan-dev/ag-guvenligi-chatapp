import forge from 'node-forge'

export const encryptWithRSA = (publicKey, plaintext) => {
    const publicKeyPem = `-----BEGIN PUBLIC KEY-----\n${publicKey}\n-----END PUBLIC KEY-----`;
    const rsa = forge.pki.publicKeyFromPem(publicKeyPem);
    const encryptedText = rsa.encrypt(plaintext, 'RSA-OAEP', {
        md: forge.md.sha256.create(),
    });
    return forge.util.encode64(encryptedText);
}