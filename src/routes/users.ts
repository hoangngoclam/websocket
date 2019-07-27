import UsersController from "../controllers/users.controller";
import auth from "../middlewares/auth";

export class Users {
    constructor(app) {
        app.route('/users')
            .post(UsersController.create())
            .get(UsersController.getAll());
        app.route('/users/:id')
            .get(auth, UsersController.getById())
            .put(auth, UsersController.updateById())
            .delete(auth, UsersController.deleteById());
    }
}