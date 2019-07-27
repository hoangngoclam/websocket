"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class BaseSocket {
    /**
     *
     * @param websocket socket connect
     */
    constructor(websocket) {
        this.ws = websocket;
    }
}
exports.default = BaseSocket;
