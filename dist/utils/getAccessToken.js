"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getAccessToken = (cookie) => {
    try {
        const { access_token } = cookie;
        return access_token;
    }
    catch (e) {
        throw new Error("Unauthorized");
    }
};
exports.default = getAccessToken;
