import * as WebSocket from "ws";
import * as urlParser from "url-parse";
import RoomsSocket from "./sockets/rooms.socket";
import PlayersSocket from "./sockets/players.socket";
import Message from "./sockets/message.class";
import {RouteReceiveMessage} from "./routeReceiveMessage";

class WebsocketClass {
    public wss;
    public players: PlayersSocket;
    public rooms: RoomsSocket;

    constructor(server) {
        this.wss = new WebSocket.Server({server});
        this.players = new PlayersSocket();
        this.rooms = new RoomsSocket();
        this.connect()
    }

    connect() {
        let message = new Message();
        let routeReceiveMessage = new RouteReceiveMessage();

        this.wss.on('connection', (ws, req) => {
            let url = urlParser(req.url, true);//url{ query:{ hello: '123213', encoding: 'text' },pathname:'/'}
            try {
                if (url.pathname === "/sockets" && url.query.id) { //allow connect link: http://localhost:5000/sockets?id=12312
                    if (!this.players.addPlayerById(url.query.id.toString(), ws)) { //add player to list return true or false
                        ws.terminate(); //disconnect socket (Player)
                    }

                    let player = this.players.findPlayerById(url.query.id);
                    this.players.sendMessageToAllPlayer(message.getUserMessage(JSON.stringify(this.players.getAllUserConnect())));

                    player.ws.on('close', () => { //when a player disconnect
                        this.players.removePlayerById(player.getId());
                        this.players.sendMessageToAllPlayer(message.getUserMessage(JSON.stringify(this.players.getAllUserConnect())));
                    });

                    player.ws.on('message', (message) => { //listening message
                        routeReceiveMessage.message(this, player, message);
                    });
                } else {
                    ws.terminate();
                }

            } catch (e) {
                console.log(e);
            }
        });
    }
}

export default WebsocketClass;

export const websocketClass = server => {
    return new WebsocketClass(server)
};