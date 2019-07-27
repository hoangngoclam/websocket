import {BaseRepository} from "./base.repository";
import {UserModel} from "../models/user.model";

export default class UserRepository extends BaseRepository {

    constructor() {
        super(UserModel);
    }

    isExist = (username) => {
        return new Promise(((resolve) => {
            this.model.findOne({username})
                .then((user) => {
                    (user) && resolve(true);
                    resolve(false);
                });
        }));
    };
}