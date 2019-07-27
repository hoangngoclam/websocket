"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_repository_1 = require("./base.repository");
const user_model_1 = require("../models/user.model");
class UserRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(user_model_1.UserModel);
        this.isExist = (username) => {
            return new Promise(((resolve) => {
                this.model.findOne({ username })
                    .then((user) => {
                    (user) && resolve(true);
                    resolve(false);
                });
            }));
        };
    }
}
exports.default = UserRepository;
