"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const cors = require("cors");
const config = require("config");
const http = require("http");
const WebsocketClass_1 = require("./websocket/WebsocketClass");
// config CORS
const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200,
    credentials: true
};
app_1.default.use(cors(corsOptions));
let port = process.env.PORT || 5001;
console.log(config.util.getEnv('NODE_ENV'));
if (config.util.getEnv('NODE_ENV') !== 'test') {
    port = process.env.PORT || 5000;
}
const server = http.createServer(app_1.default);
WebsocketClass_1.websocketClass(server);
server.listen(port, () => console.log(`Server listening on port ${port}`));
exports.default = server;
