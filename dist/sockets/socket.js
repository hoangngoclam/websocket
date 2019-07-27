"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Socket {
    constructor(SocketIO) {
        this.clients = [];
        this.io = SocketIO;
    }
}
exports.default = Socket;
