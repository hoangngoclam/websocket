import * as jwt from "jsonwebtoken"
import * as config from "config"

const signToken = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, config.get("JWT_SECRET_KEY"), {expiresIn: '1h'}, (err, token) => {
            if (err) reject("Can't create access token.");
            resolve(token);
        });
    })
};
export default signToken