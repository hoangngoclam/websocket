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
let UserController = new class UsersController extends base_controller_1.default {
    constructor() {
        super(Service);
    }
    create() {
        return (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield Service.create(req.body)
                    .then(result => {
                    const [user, token] = result;
                    // Set cookie
                    res.cookie("access_token", token, {
                        maxAge: 6000,
                        httpOnly: true,
                        secure: true
                    });
                    // return user
                    res.status(201).json(user);
                });
            }
            catch (e) {
                res.status(400).json({ error: e.message });
            }
        });
    }
};
exports.default = UserController;
