"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const WebSocket = require("ws");
const urlParser = require("url-parse");
const rooms_socket_1 = require("./sockets/rooms.socket");
const players_socket_1 = require("./sockets/players.socket");
const message_class_1 = require("./sockets/message.class");
const routeReceiveMessage_1 = require("./routeReceiveMessage");
class WebsocketClass {
    constructor(server) {
        this.wss = new WebSocket.Server({ server });
        this.players = new players_socket_1.default();
        this.rooms = new rooms_socket_1.default();
        this.connect();
    }
    connect() {
        let message = new message_class_1.default();
        let routeReceiveMessage = new routeReceiveMessage_1.RouteReceiveMessage();
        this.wss.on('connection', (ws, req) => {
            let url = urlParser(req.url, true); //url{ query:{ hello: '123213', encoding: 'text' },pathname:'/'}
            try {
                if (url.pathname === "/sockets" && url.query.id) { //allow connect link: http://localhost:5000/sockets?id=12312
                    if (!this.players.addPlayerById(url.query.id.toString(), ws)) { //add player to list return true or false
                        ws.terminate(); //disconnect socket (Player)
                    }
                    let player = this.players.findPlayerById(url.query.id);
                    this.players.sendMessageToAllPlayer(message.getUserMessage(JSON.stringify(this.players.getAllUserConnect())));
                    player.ws.on('close', () => {
                        this.players.removePlayerById(player.getId());
                        this.players.sendMessageToAllPlayer(message.getUserMessage(JSON.stringify(this.players.getAllUserConnect())));
                    });
                    player.ws.on('message', (message) => {
                        routeReceiveMessage.message(this, player, message);
                    });
                }
                else {
                    ws.terminate();
                }
            }
            catch (e) {
                console.log(e);
            }
        });
    }
}
exports.default = WebsocketClass;
exports.websocketClass = server => {
    return new WebsocketClass(server);
};
