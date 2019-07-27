export default class Socket {
    private io;
    private clients = [];
    constructor(SocketIO){
        this.io = SocketIO;
    }
}