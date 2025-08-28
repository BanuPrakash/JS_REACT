const crypto = require('crypto'); // CommonJS module System for import

// Default Thread pool size is 4

const start = Date.now();

crypto.pbkdf2('secret123', 'topsecretSaltValue', 100000, 512, 'sha512', () => {
    console.log("1: ", Date.now() - start + " ms");
});

crypto.pbkdf2('secret123', 'topsecretSaltValue', 100000, 512, 'sha512', () => {
    console.log("2: ", Date.now() - start + " ms");
});

crypto.pbkdf2('secret123', 'topsecretSaltValue', 100000, 512, 'sha512', () => {
    console.log("3: ", Date.now() - start + " ms");
});

crypto.pbkdf2('secret123', 'topsecretSaltValue', 100000, 512, 'sha512', () => {
    console.log("4: ", Date.now() - start + " ms");
});

crypto.pbkdf2('secret123', 'topsecretSaltValue', 100000, 512, 'sha512', () => {
    console.log("5: ", Date.now() - start + " ms");
});
crypto.pbkdf2('secret123', 'topsecretSaltValue', 100000, 512, 'sha512', () => {
    console.log("6: ", Date.now() - start + " ms");
});
crypto.pbkdf2('secret123', 'topsecretSaltValue', 100000, 512, 'sha512', () => {
    console.log("7: ", Date.now() - start + " ms");
});