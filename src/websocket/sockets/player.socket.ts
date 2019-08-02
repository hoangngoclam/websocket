import BaseSocket from "./base.socket";

class PlayerSocket extends BaseSocket{
    protected id:string;
    protected roomId = null;
    protected score = 0 ;
    protected level = 0 ;
    protected name = "";
    constructor(id:string,websocket){
        super(websocket);
        this.id = id;
        this.name = "Guest_"+id
    }
    setRoomId(id){
        this.roomId = id;
    }
    getRoomId(){
        return this.roomId;
    }
    setScore(score){
        this.score = score;
    }
    getScore(){
        return this.score;
    }
    setLevel(level){
        this.level = level;
    }
    getLevel(){
        return this.level;
    }
    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    getId(){
        return this.id;
    }
    sendMessage(message){
        this.ws.send(message);
    }
    getShortInfo(){
        return{
            id:this.id,roomId:this.roomId,score:this.score,
            level:this.level,name:this.name
        };
    }
}

export default PlayerSocket