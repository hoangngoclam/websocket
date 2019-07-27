"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jwt = require("jsonwebtoken");
const config = require("config");
const signToken = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload, config.get("JWT_SECRET_KEY"), { expiresIn: '1h' }, (err, token) => {
            if (err)
                reject("Can't create access token.");
            resolve(token);
        });
    });
};
exports.default = signToken;
