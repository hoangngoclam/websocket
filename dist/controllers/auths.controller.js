"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const base_controller_1 = require("./base.controller");
const user_service_1 = require("../services/user.service");
const Service = new user_service_1.default();
class AuthsController extends base_controller_1.default {
    constructor() {
        super(Service);
    }
    loginUser() {
        return (req, res) => __awaiter(this, void 0, void 0, function* () {
            let username = req.body.username;
            let pass = req.body.password;
            console.log(username, pass);
            let result = yield Service.loginService(username, pass);
            console.log(result);
            if (result) {
                res.json({ success: true });
            }
            else {
                res.json({ success: false });
            }
        });
    }
    registerUSer() {
        return (req, res) => __awaiter(this, void 0, void 0, function* () {
            let result = yield Service.registerUser(req.body);
            try {
                res.cookie('cookie', result[1]);
                res.json(result);
            }
            catch (e) {
                res(e);
            }
        });
    }
}
exports.AuthsController = AuthsController;
exports.default = new AuthsController();
