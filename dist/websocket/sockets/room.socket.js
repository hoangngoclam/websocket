"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
    sendToAllPlayer(message) {
        this.listPlayer.forEach(player => {
            player.ws.send(`send in room ${this.id} message: ${message}`);
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
