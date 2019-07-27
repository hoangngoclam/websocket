"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_controller_1 = require("../controllers/users.controller");
const auth_1 = require("../middlewares/auth");
class Users {
    constructor(app) {
        app.route('/users')
            .post(users_controller_1.default.create())
            .get(users_controller_1.default.getAll());
        app.route('/users/:id')
            .get(auth_1.default, users_controller_1.default.getById())
            .put(auth_1.default, users_controller_1.default.updateById())
            .delete(auth_1.default, users_controller_1.default.deleteById());
    }
}
exports.Users = Users;
