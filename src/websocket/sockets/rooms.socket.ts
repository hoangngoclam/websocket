import RoomSocket from "./room.socket";
import PlayerSocket from "./player.socket";

class RoomsSocket {

    public listRoom: RoomSocket[] = [];

    constructor() {

    }

    createRoom(player:PlayerSocket) {
        if(this.checkAuthCreated(player.getId())){
            return false;
        }
        let newRoom = new RoomSocket(Math.floor(Math.random()*100000+1).toString(),player);
        this.addRoom(newRoom);
        return true;
    }

    joinMemberToRoom(player:PlayerSocket,roomId:string){
        try {
            let targetRoom = this.listRoom.find(room=>room.getRoomId() === roomId);
            targetRoom.addPlayer(player);
            return true;
        }
        catch (e) {
            return false;
        }
    }

    protected addRoom(room: RoomSocket) {
        this.listRoom.push(room);
    }
    sendMessageToRoomId(message:string,id:string){
        let targetRoom = this.listRoom.find(room=>room.getRoomId() === id);
        targetRoom.sendToAllPlayer(message);
    }
    removeRoomById(id: string) {
        this.listRoom = this.listRoom.filter(room => {
            return room.getRoomId() !== id;
        })
    }

    findRoomById(id:string){
        let rooms = this.listRoom.find(room=>{
            return room.getRoomId() === id;
        });
        return rooms;
    }
    checkAuthCreated(userId:string){
        this.listRoom.forEach(room=>{
            if(room.getAuth().getId() == userId){
                return true
            }
        });
        return false;
    }
}

export default RoomsSocket