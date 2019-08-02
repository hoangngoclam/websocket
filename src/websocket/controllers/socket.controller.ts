import WebsocketClass from "../WebsocketClass";
import PlayerSocket from "../sockets/player.socket";
import Message from "../sockets/message.class";

let message = new Message();

class SocketController {
    protected websocketClass: WebsocketClass;
    protected player: PlayerSocket;
    protected data: any;

    constructor(websocketClass: WebsocketClass, player: PlayerSocket, data) {
        this.websocketClass = websocketClass;
        this.player = player;
        this.data = data;
    }

    sendAllUser() {
        this.websocketClass.players.sendMessageToAllPlayer(message.getDefaultMessage(this.data.message));
    }

    createRoom() {
        if (this.websocketClass.rooms.createRoom(this.player)) {
            this.player.sendMessage(message.getSuccessMessage("Create room success"));
            this.player.sendMessage(message.getDefaultMessage(JSON.stringify(this.websocketClass.rooms.getListRoomInfo())));
        }
        else {
            this.player.sendMessage(message.getErrorMessage("Fail to create Room"));
        }
    }

    joinRoom() {
        let roomPlayerJoinInto = this.websocketClass.rooms.findRoomById(this.data.roomId.toString());
        if (roomPlayerJoinInto) {
            roomPlayerJoinInto.addPlayer(this.player);
            this.player.sendMessage(message.getSuccessMessage("Join to room success"));
            this.player.setRoomId(this.data.roomId);
            this.player.sendMessage(message.getDefaultMessage(JSON.stringify(roomPlayerJoinInto.getShortInfo())));
        } else {
            this.player.sendMessage(message.getErrorMessage("Fail to join to class"));
        }
    }

    outRoom() {
        if(!this.player.getRoomId()){
            this.player.sendMessage(message.getErrorMessage("You have not room"));
        }
        let roomPlayerMoveOut = this.websocketClass.rooms.findRoomById(this.player.getRoomId().toString());
        if (roomPlayerMoveOut) {
            roomPlayerMoveOut.removePlayer(this.player.getId());
            this.player.setRoomId(null);
            if(roomPlayerMoveOut.listPlayer.length === 0){
                this.websocketClass.rooms.removeRoomById(this.player.getRoomId());
            }
            this.player.sendMessage(message.getSuccessMessage("Out room success"));
            this.player.setRoomId(null);
            this.player.sendMessage(message.getDefaultMessage(JSON.stringify(this.websocketClass.rooms.getListRoomInfo())))
        }
        else{
            this.player.sendMessage(message.getErrorMessage("Fail to out class"));
        }
    }

    callInRoom() {
        if (!this.player.getRoomId()) {
            this.player.sendMessage(message.getErrorMessage("You have not joined any room"));
            return;
        }
        let roomForCall = this.websocketClass.rooms.findRoomById(this.player.getRoomId().toString());
        if (roomForCall) {
            roomForCall.sendToAllPlayer(message.getDefaultMessage(this.data.message));
            this.player.sendMessage(message.getSuccessMessage("Send message success"));
        } else {
            this.player.sendMessage(message.getErrorMessage("Error call to this room"));
        }
    }

    //data:{type:"SCORE",score:12}
    updateScore(){
        if(this.player.getRoomId()){
            let myRoom = this.websocketClass.rooms.findRoomById(this.player.getRoomId().toString());
            if(!myRoom.updateScorePlayers(this.player,this.data.score)){
                this.player.sendMessage(message.getErrorMessage('Update score fail'))
            }
        }
        else{
            this.player.sendMessage(message.getErrorMessage('You have not room'))
        }
    }
}

export default SocketController;