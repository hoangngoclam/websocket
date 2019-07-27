import app from "./app";
import * as cors from "cors";
import * as config from "config";
import * as http from "http";
import {websocketClass} from './websocket/WebsocketClass'

// config CORS
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
    credentials: true
};

app.use(cors(corsOptions));
let port = process.env.PORT || 5001;

console.log(config.util.getEnv('NODE_ENV'));
if (config.util.getEnv('NODE_ENV') !== 'test') {
    port = process.env.PORT || 5000;
}
const server = http.createServer(app);

websocketClass(server);

server.listen(port, () => console.log(`Server listening on port ${port}`));

export default server;
