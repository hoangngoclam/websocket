import BaseSocket from "./base.socket";
import PlayerSocket from "./player.socket";

class RoomSocket {
    protected id:string;
    protected auth:PlayerSocket;
    public listPlayer:PlayerSocket[] = [];
    protected maxPlayerNumber = 4;
    constructor(id:string, auth:PlayerSocket = null){
        this.id = id;
        this.auth = auth;
    }
    setAuth(player:PlayerSocket){
        this.auth = player;
    }
    getAuth(){
        return this.auth;
    }
    addPlayer(player:PlayerSocket){
        if(this.findPlayerInRoom(player))
            return false;
        if(this.listPlayer.length >=this.maxPlayerNumber){
            return false;
        }
        this.listPlayer.push(player);
        return true;
    }

    sendToAllPlayer(message:string){
        this.listPlayer.forEach(player=>{
            player.ws.send(`send in room ${this.id} message: ${message}`);
        })
    }

    removePlayer(id:string){
        this.listPlayer = this.listPlayer.filter(player=>{
            return player.getId() !== id;
        });
    }

    getRoomId(){
        return this.id;
    }

    findPlayerInRoom(playerRe:PlayerSocket){
        return this.listPlayer.find(player=>{
            return player.getId() == playerRe.getId();
        })
    }
}

export default RoomSocket