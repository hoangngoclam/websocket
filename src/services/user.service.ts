import * as _ from 'lodash';
import UserRepository from "../database/repositories/user.repository";
import BaseService from "./base.service";
import getHash from "../utils/getHash";
import signToken from "../utils/getToken";
import {Users} from "../routes/users";

const Repository = new UserRepository();

export default class UserService extends BaseService {
    constructor() {
        super(Repository)
    }
    create = async user => {
        if (_.isEmpty(user.username)) throw new Error("Username is required!");
        if (_.isEmpty(user.password)) throw new Error("Password is required!");
        if (_.isEmpty(user.confirmPassword)) throw new Error("Confirm password to continue!");
        if (!_.isEqual(user.password, user.confirmPassword)) throw new Error("Password didn't match!");
        if (await Repository.isExist(user.username)) throw new Error("User has registered!");
        if (await getHash(user.password)) {
            user.password = await getHash(user.password);
        }
        try {
            return [await Repository.create(user), await signToken(user)]
        } catch (e) {
            throw new Error(e)
        }
    };
    loginService = async (name,pass) =>{
        let user = await Repository.getByNamePass(name,pass);
        if(user){
            return true;
        }
        else{
            return false;
        }
    };
    registerUser = async (user) => {
        try {
            return [await Repository.create(user), await signToken(user)]
        } catch (e) {
            throw new Error(e)
        }
    };
}