"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_socket_1 = require("./base.socket");
class PlayerSocket extends base_socket_1.default {
    constructor(id, websocket) {
        super(websocket);
        this.roomId = null;
        this.id = id;
    }
    setRoomId(id) {
        this.roomId = id;
    }
    getRoomId() {
        return this.roomId;
    }
    getId() {
        return this.id;
    }
    sendMessage(message) {
        this.ws.send(message);
    }
    getShortInfo() {
        return { id: this.id, roomId: this.roomId };
    }
}
exports.default = PlayerSocket;
