const { generateKeyPairSync } = require('crypto');
const fs = require('fs');

// Generate RSA Key Pair
const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: { type: 'spki', format: 'pem' },
  privateKeyEncoding: { type: 'pkcs8', format: 'pem' },
});

// Save Private Key to .env
fs.writeFileSync('.env.local', `JWT_PRIVATE_KEY=${privateKey}\n`, { flag: 'a' });

// Generate JWKS
const jwk = require('pem-jwk').pem2jwk(publicKey);
jwk.use = 'sig';
jwk.kid = 'my-key-id';
jwk.alg = 'RS256';

const jwks = { keys: [jwk] };
fs.writeFileSync('.env.local', `JWKS=${JSON.stringify(jwks)}\n`, { flag: 'a' });

console.log("✅ JWT_PRIVATE_KEY & JWKS generated in .env.local");