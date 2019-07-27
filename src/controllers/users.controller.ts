import BaseController from "./base.controller";
import UserService from "../services/user.service";

const Service = new UserService();

let UserController =  new class UsersController extends BaseController {
    constructor() {
        super(Service);
    }

    create() {
        return async (req, res) => {
            try {
                await Service.create(req.body)
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
            } catch (e) {
                res.status(400).json({error: e.message})
            }
        }
    }
};
export default UserController