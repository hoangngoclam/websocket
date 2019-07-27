"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message_class_1 = require("./message.class");
let message = new message_class_1.default();
class RoomSocket {
    constructor(id, auth = null) {
        this.listPlayer = [];
        this.maxPlayerNumber = 4;
        this.id = id;
        this.auth = auth;
    }
    setAuth(player) {
        this.auth = player;
    }
    getShortInfo() {
        let payload = {
            id: this.id,
            auth: this.auth.getShortInfo(),
            maxPlayer: this.maxPlayerNumber,
            listPlayer: this.listPlayer.map(item => {
                return item.getShortInfo();
            })
        };
        return payload;
    }
    getAuth() {
        return this.auth;
    }
    addPlayer(player) {
        if (this.findPlayerInRoom(player))
            return false;
        if (this.listPlayer.length >= this.maxPlayerNumber) {
            return false;
        }
        this.listPlayer.push(player);
        return true;
    }
    sendToAllPlayer(msg) {
        this.listPlayer.forEach(player => {
            player.ws.send(msg);
        });
    }
    removePlayer(id) {
        this.listPlayer = this.listPlayer.filter(player => {
            return player.getId() !== id;
        });
    }
    getRoomId() {
        return this.id;
    }
    findPlayerInRoom(playerRe) {
        return this.listPlayer.find(player => {
            return player.getId() == playerRe.getId();
        });
    }
}
exports.default = RoomSocket;
