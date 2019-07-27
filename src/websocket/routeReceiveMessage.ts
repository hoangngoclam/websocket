import WebsocketClass from "./WebsocketClass";
import PlayerSocket from "./sockets/player.socket";
import SocketController from "./controllers/socket.controller";
import Message from "./sockets/message.class";
let messageClass = new Message();
export class RouteReceiveMessage {
    private socketController;
    constructor(){
    }

    message(websocketClass:WebsocketClass,player:PlayerSocket,message){
        let data;
        try {
            data = JSON.parse(message); //data:{type:"CREATE_ROOM",roomId:1123,message:"Hello"}
        } catch (e) {
            player.sendMessage(messageClass.getErrorMessage("Error type")); //send message error for player
            return;
        }
        this.socketController = new SocketController(websocketClass,player,data);
        switch (data.type) {
            case "SEND_ALL_USER":
                //data:{type:"SEND_ALL_USER",message:"Hello this is message"}
                this.socketController.sendAllUser();
                break;
            case "CREATE_ROOM":
                //data:{type:"CREATE_ROOM"}
                this.socketController.createRoom();
                break;
            case "JOIN_ROOM":
                //data:{type:"JOIN_ROOM",roomId:"123"}
                this.socketController.joinRoom();
                break;
            case "OUT_ROOM":
                //data:{type:"OUT_ROOM",roomId:"123"}
                this.socketController.outRoom();
                break;
            case "CALL_IN_ROOM":
                //data:{type:"CALL_IN_ROOM",message:"Hello this is message"}
                this.socketController.callInRoom();
                break;
        }
    }
}