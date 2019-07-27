import * as express from 'express';
import {Routes} from "./routes";
import * as cookieParser from "cookie-parser";
import * as databaseConfig from "./database/config";
import * as morgan from "morgan";
import * as config from "config";
import * as cors from "cors";
class App {
    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
    }

    private config(): void {
        if (config.util.getEnv('NODE_ENV') !== 'test') {
            // use morgan to log at command line
            this.app.use(morgan('combined'));
        }

        // parse application/json
        this.app.use(express.json());

        // parse application/x-www-form-urlencoded
        this.app.use(express.urlencoded({extended: false}));

        // use cookieParser
        this.app.use(cookieParser());

        // config CORS
        const corsOptions = {
            origin: '*',
            optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
            credentials: true
        };

        this.app.use(cors(corsOptions));

        // use routes
        new Routes(this.app);

        //connect to DB
        databaseConfig.connect();
    }
}

export default new App().app;