"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const auths_controller_1 = require("../controllers/auths.controller");
class Auth {
    constructor(app) {
        // app.route('/users/login')
        //     .post((req : Request, res: Response)=>{
        //         res.send("AUTH")
        //     })
        app.route('/users/login')
            .post(auths_controller_1.default.loginUser());
        app.route('/users/register')
            .post(auths_controller_1.default.registerUSer());
    }
}
exports.Auth = Auth;
