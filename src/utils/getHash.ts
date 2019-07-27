import * as bcrypt from 'bcrypt'

const getHash = (password) => {
    return new Promise((resolve, reject) => {
        bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(password, salt, (err, hash) => {
                // Return hash.
                if (err) reject("Can't get hash from password! Let's try again.");
                resolve(hash);
            });
        });
    })
};
export default getHash