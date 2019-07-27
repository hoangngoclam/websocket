// import auth from "../middlewares/auth";
import RelationshipController from "../controllers/relationships.controller";

export class Relationships {
    constructor(app) {
        app.route('/relationship')
            .post(RelationshipController.create());
        app.route('/relationship/:id')
            .get(RelationshipController.getById())
            .put(RelationshipController.updateById())
            .delete(RelationshipController.deleteById());
        app.route('/relationship/friends/:id')
            .get(RelationshipController.getFriendsList());
        app.route('/relationship/following/:id')
            .get(RelationshipController.getFollowingList())
    }
}