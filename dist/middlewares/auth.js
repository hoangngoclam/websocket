"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const verifyToken_1 = require("../utils/verifyToken");
const getAccessToken_1 = require("../utils/getAccessToken");
const auth = (req, res, next) => {
    try {
        let access_token = getAccessToken_1.default(req.cookies);
        if (access_token) {
            verifyToken_1.default(access_token)
                .then(user => {
                if (user)
                    return next();
            })
                .catch(() => res.status(401).json({ error: "Unauthorized" }));
        }
        else {
            res.status(401).json({ error: "Unauthorized" });
        }
    }
    catch (e) {
        res.status(401).json({ error: e.message });
    }
};
exports.default = auth;
