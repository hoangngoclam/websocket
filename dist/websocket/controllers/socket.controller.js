"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const message_class_1 = require("../sockets/message.class");
let message = new message_class_1.default();
class SocketController {
    constructor(websocketClass, player, data) {
        this.websocketClass = websocketClass;
        this.player = player;
        this.data = data;
    }
    sendAllUser() {
        this.websocketClass.players.sendMessageToAllPlayer(message.getDefaultMessage(this.data.message));
    }
    createRoom() {
        // if (this.websocketClass.rooms.addRoom(this.player)) {
        //     this.player.sendMessage(message.getSuccessMessage("Create room success"));
        //     this.player.sendMessage(message.getDefaultMessage(`Have 1 Player in this room`));
        // }
        // else {
        //     this.player.sendMessage(message.getErrorMessage("Fail to create Room"));
        // }
    }
    joinRoom() {
        let roomPlayerJoinInto = this.websocketClass.rooms.findRoomById(this.data.roomId.toString());
        if (roomPlayerJoinInto) {
            roomPlayerJoinInto.addPlayer(this.player);
            this.player.sendMessage(message.getSuccessMessage("join to room success"));
            this.player.setRoomId(this.data.roomId);
            this.player.sendMessage(message.getDefaultMessage(`Have ${roomPlayerJoinInto.listPlayer.length} Player in this room`));
        }
        else {
            this.player.sendMessage(message.getErrorMessage("Fail to join to class"));
        }
    }
    outRoom() {
        let roomPlayerMoveOut = this.websocketClass.rooms.findRoomById(this.data.roomId);
        if (roomPlayerMoveOut) {
            roomPlayerMoveOut.removePlayer(this.player.getId());
            this.player.sendMessage(message.getSuccessMessage("out room success"));
            this.player.setRoomId(null);
            this.player.sendMessage(message.getDefaultMessage(`Have ${roomPlayerMoveOut.listPlayer.length} Player in this room`));
        }
        this.player.sendMessage(message.getErrorMessage("Fail to join to class"));
    }
    callInRoom() {
        if (!this.player.getRoomId()) {
            this.player.sendMessage("you not in this room");
            return;
        }
        let roomForCall = this.websocketClass.rooms.findRoomById(this.player.getRoomId().toString());
        if (roomForCall) {
            roomForCall.sendToAllPlayer(this.data.message);
            this.player.sendMessage("send message success");
        }
        else {
            this.player.sendMessage("error call to this room");
        }
    }
}
exports.default = SocketController;
