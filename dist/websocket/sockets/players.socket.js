"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const player_socket_1 = require("./player.socket");
class PlayersSocket {
    constructor() {
        this.listPlayer = [];
    }
    addPlayerById(id, webSocket) {
        let newPlayer = new player_socket_1.default(id, webSocket);
        if (!this.findPlayerById(id)) {
            this.addPlayer(newPlayer);
            return true;
        }
        return false;
    }
    addPlayer(player) {
        this.listPlayer.push(player);
    }
    findPlayerById(id) {
        return this.listPlayer.find(player => {
            return player.getId() === id;
        });
    }
    removePlayerById(id) {
        this.listPlayer = this.listPlayer.filter(room => {
            return room.getId() !== id;
        });
    }
    sendMessageToAllPlayer(message) {
        this.listPlayer.forEach(player => {
            player.sendMessage(message);
        });
    }
    getAllUserConnect() {
        return this.listPlayer.map(item => {
            return { id: item.getId(), roomId: item.getRoomId() };
        });
    }
}
exports.default = PlayersSocket;
