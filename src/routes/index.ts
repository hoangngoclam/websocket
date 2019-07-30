import {Users} from "./users";
import * as e from "express";
import {Auth} from "./auth";
import {Stories} from "./stories";
import {Relationships} from "./relationships";
import {Questions} from "./questions";

export class Routes {
    constructor(app: e.Application) {
        new Users(app);
        new Auth(app);
        new Stories(app);
        new Questions(app);
        new Relationships(app)
    }
}