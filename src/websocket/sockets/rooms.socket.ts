import RoomSocket from "./room.socket";
import PlayerSocket from "./player.socket";

class RoomsSocket {

    public listRoom: RoomSocket[] = [];

    constructor() {

    }

    getListRoomInfo(){
        return{
            listRoom:this.listRoom.map(room=>{
                return room.getShortInfo();
            })
        }
    }
    createRoom(player:PlayerSocket) {
        if(this.checkAuthCreated(player.getId())){
            return false;
        }
        let roomId = Math.floor(Math.random()*100000+1).toString();
        let newRoom = new RoomSocket(roomId,player);
        newRoom.setAuth(player);
        newRoom.addPlayer(player);
        player.setRoomId(roomId);
        this.addRoom(newRoom);
        return true;
    }

    protected addRoom(room: RoomSocket) {
        this.listRoom.push(room);
    }
    removeRoomById(id: string) {
        this.listRoom = this.listRoom.filter(room => {
            return room.getRoomId() !== id;
        })
    }

    findRoomById(id:string){
        let rooms = this.listRoom.find(room=>{
            return room.getRoomId().toString() === id;
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