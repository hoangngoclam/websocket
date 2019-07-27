import * as jwt from "jsonwebtoken";
import * as config from "config";

const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, config.get("JWT_SECRET_KEY"), (err, authorizedData) => {
            if (err) reject("Can't verify token");
            resolve(authorizedData);
        })
    })
};

export default verifyToken