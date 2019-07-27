class BaseSocket {
    public ws;

    /**
     *
     * @param websocket socket connect
     */
    constructor(websocket){
        this.ws = websocket;
    }
}

export default BaseSocket