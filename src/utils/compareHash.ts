import * as bcrypt from 'bcrypt'

const compareHash = (password, hash) => {
    return new Promise((resolve, reject) => {
        bcrypt.compare(password, hash, function (err, res) {
            if (err) reject(err);
            resolve(res);
        });
    })
};
export default compareHash