"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import auth from "../middlewares/auth";
const relationships_controller_1 = require("../controllers/relationships.controller");
class Relationships {
    constructor(app) {
        app.route('/relationship')
            .post(relationships_controller_1.default.create());
        app.route('/relationship/:id')
            .get(relationships_controller_1.default.getById())
            .put(relationships_controller_1.default.updateById())
            .delete(relationships_controller_1.default.deleteById());
        app.route('/relationship/friends/:id')
            .get(relationships_controller_1.default.getFriendsList());
        app.route('/relationship/following/:id')
            .get(relationships_controller_1.default.getFollowingList());
    }
}
exports.Relationships = Relationships;
