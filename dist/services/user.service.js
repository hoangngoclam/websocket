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
const _ = require("lodash");
const user_repository_1 = require("../database/repositories/user.repository");
const base_service_1 = require("./base.service");
const getHash_1 = require("../utils/getHash");
const getToken_1 = require("../utils/getToken");
const Repository = new user_repository_1.default();
class UserService extends base_service_1.default {
    constructor() {
        super(Repository);
        this.create = (user) => __awaiter(this, void 0, void 0, function* () {
            if (_.isEmpty(user.username))
                throw new Error("Username is required!");
            if (_.isEmpty(user.password))
                throw new Error("Password is required!");
            if (_.isEmpty(user.confirmPassword))
                throw new Error("Confirm password to continue!");
            if (!_.isEqual(user.password, user.confirmPassword))
                throw new Error("Password didn't match!");
            if (yield Repository.isExist(user.username))
                throw new Error("User has registered!");
            if (yield getHash_1.default(user.password)) {
                user.password = yield getHash_1.default(user.password);
            }
            try {
                return [yield Repository.create(user), yield getToken_1.default(user)];
            }
            catch (e) {
                throw new Error(e);
            }
        });
        this.loginService = (name, pass) => __awaiter(this, void 0, void 0, function* () {
            let user = yield Repository.getByNamePass(name, pass);
            if (user) {
                return true;
            }
            else {
                return false;
            }
        });
        this.registerUser = (user) => __awaiter(this, void 0, void 0, function* () {
            try {
                return [yield Repository.create(user), yield getToken_1.default(user)];
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
}
exports.default = UserService;
