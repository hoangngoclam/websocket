import BaseSocket from "./base.socket";

class PlayerSocket extends BaseSocket{
    protected id:string;
    protected roomId = null;
    constructor(id:string,websocket){
        super(websocket);
        this.id = id;
    }
    setRoomId(id){
        this.roomId = id;
    }
    getRoomId(){
        return this.roomId;
    }
    getId(){
        return this.id;
    }
    sendMessage(message){
        this.ws.send(message);
    }
    getShortInfo(){
        return{id:this.id,roomId:this.roomId};
    }
}

export default PlayerSocket