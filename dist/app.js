"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const config = require("config");
const cors = require("cors");
class App {
    constructor() {
        this.app = express();
        this.config();
    }
    config() {
        if (config.util.getEnv('NODE_ENV') !== 'test') {
            // use morgan to log at command line
            this.app.use(morgan('combined'));
        }
        // parse application/json
        this.app.use(express.json());
        // parse application/x-www-form-urlencoded
        this.app.use(express.urlencoded({ extended: false }));
        // use cookieParser
        this.app.use(cookieParser());
        // config CORS
        const corsOptions = {
            origin: '*',
            optionsSuccessStatus: 200,
            credentials: true
        };
        this.app.use(cors(corsOptions));
        // use routes
        // new Routes(this.app);
        //connect to DB
        // databaseConfig.connect();
    }
}
exports.default = new App().app;
