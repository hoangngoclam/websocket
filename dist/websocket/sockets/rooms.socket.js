"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const room_socket_1 = require("./room.socket");
class RoomsSocket {
    constructor() {
        this.listRoom = [];
    }
    getListRoomInfo() {
        return {
            listRoom: this.listRoom.map(room => {
                return room.getShortInfo();
            })
        };
    }
    createRoom(player) {
        if (this.checkAuthCreated(player.getId())) {
            return false;
        }
        let roomId = Math.floor(Math.random() * 100000 + 1).toString();
        let newRoom = new room_socket_1.default(roomId, player);
        newRoom.setAuth(player);
        newRoom.addPlayer(player);
        player.setRoomId(roomId);
        this.addRoom(newRoom);
        return true;
    }
    joinMemberToRoom(player, roomId) {
        try {
            let targetRoom = this.listRoom.find(room => room.getRoomId() === roomId);
            targetRoom.addPlayer(player);
            return true;
        }
        catch (e) {
            return false;
        }
    }
    addRoom(room) {
        this.listRoom.push(room);
    }
    sendMessageToRoomId(message, id) {
        let targetRoom = this.listRoom.find(room => room.getRoomId() === id);
        targetRoom.sendToAllPlayer(message);
    }
    removeRoomById(id) {
        this.listRoom = this.listRoom.filter(room => {
            return room.getRoomId() !== id;
        });
    }
    findRoomById(id) {
        let rooms = this.listRoom.find(room => {
            return room.getRoomId().toString() === id;
        });
        return rooms;
    }
    checkAuthCreated(userId) {
        this.listRoom.forEach(room => {
            if (room.getAuth().getId() == userId) {
                return true;
            }
        });
        return false;
    }
}
exports.default = RoomsSocket;
