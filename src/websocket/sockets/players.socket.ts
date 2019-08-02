import PlayerSocket from "./player.socket";

class PlayersSocket {

    public listPlayer: PlayerSocket[] = [];

    constructor() {

    }

    addPlayerById(id:string,webSocket) {
        let newPlayer = new PlayerSocket(id,webSocket);
        if (!this.findPlayerById(id)) {
            this.addPlayer(newPlayer);
            return true;
        }
        return false;
    }

    addPlayer(player: PlayerSocket) {
        this.listPlayer.push(player);
    }

    findPlayerById(id:string){
        return this.listPlayer.find(player=>{
            return player.getId() === id;
        })
    }

    removePlayerById(id: string) {
        this.listPlayer = this.listPlayer.filter(room => {
            return room.getId() !== id;
        })
    }

    sendMessageToAllPlayer(message) {
        this.listPlayer.forEach(player => {
            player.sendMessage(message);
        })
    }

    getAllUserConnect(){
        return this.listPlayer.map(item=>{
            return item.getShortInfo();
        })
    }
}

export default PlayersSocket