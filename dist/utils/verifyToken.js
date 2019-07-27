"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const config = require("config");
const verifyToken = (token) => {
    return new Promise((resolve, reject) => {
        jwt.verify(token, config.get("JWT_SECRET_KEY"), (err, authorizedData) => {
            if (err)
                reject("Can't verify token");
            resolve(authorizedData);
        });
    });
};
exports.default = verifyToken;
