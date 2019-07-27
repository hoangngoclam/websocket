"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_1 = require("./users");
const auth_1 = require("./auth");
const stories_1 = require("./stories");
const relationships_1 = require("./relationships");
class Routes {
    constructor(app) {
        new users_1.Users(app);
        new auth_1.Auth(app);
        new stories_1.Stories(app);
        new relationships_1.Relationships(app);
    }
}
exports.Routes = Routes;
