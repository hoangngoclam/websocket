import * as _ from 'lodash';
import BaseService from "./base.service";
import RelationshipRepository from "../database/repositories/relationship.repository";
import UserRepository from "../database/repositories/user.repository";
import * as mongoose from "mongoose";

const _Repository = new RelationshipRepository();
const _UserRepository = new UserRepository();

export default class RelationshipService extends BaseService {
    constructor() {
        super(_Repository)
    }

    create = async (data) => {
        const {userId, friendId} = data;
        if (_.isEmpty(userId) || _.isEmpty(friendId)) throw new Error("Invalid Request!");
        if (!(await _UserRepository.getById(friendId))) throw new Error("User not exist!");
        if (await _Repository.isFriend(userId, friendId)) throw new Error("Be friend already!");
        try {
            return await _Repository.create(data);
        } catch (e) {
            throw new Error(e);
        }
    };

    getFollowingList = async userId => {
        if (_.isEmpty(userId)) throw new Error("Invalid Request!");
        try {
            return await _Repository.getFriendsListByParams({
                userId: new mongoose.Types.ObjectId(userId),
                status: "PENDING"
            });
        } catch (e) {
            throw new Error(e)
        }
    };

    getFriendsList = async userId => {
        if (_.isEmpty(userId)) throw new Error("Invalid Request!");
        try {
            return await _Repository.getFriendsListByParams({
                userId: new mongoose.Types.ObjectId(userId),
                status: "ACCEPT"
            });
        } catch (e) {
            throw new Error(e)
        }
    };
}