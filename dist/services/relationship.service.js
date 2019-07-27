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
const base_service_1 = require("./base.service");
const relationship_repository_1 = require("../database/repositories/relationship.repository");
const user_repository_1 = require("../database/repositories/user.repository");
const mongoose = require("mongoose");
const _Repository = new relationship_repository_1.default();
const _UserRepository = new user_repository_1.default();
class RelationshipService extends base_service_1.default {
    constructor() {
        super(_Repository);
        this.create = (data) => __awaiter(this, void 0, void 0, function* () {
            const { userId, friendId } = data;
            if (_.isEmpty(userId) || _.isEmpty(friendId))
                throw new Error("Invalid Request!");
            if (!(yield _UserRepository.getById(friendId)))
                throw new Error("User not exist!");
            if (yield _Repository.isFriend(userId, friendId))
                throw new Error("Be friend already!");
            try {
                return yield _Repository.create(data);
            }
            catch (e) {
                throw new Error(e);
            }
        });
        this.getFollowingList = (userId) => __awaiter(this, void 0, void 0, function* () {
            if (_.isEmpty(userId))
                throw new Error("Invalid Request!");
            try {
                return yield _Repository.getFriendsListByParams({
                    userId: new mongoose.Types.ObjectId(userId),
                    status: "PENDING"
                });
            }
            catch (e) {
                throw new Error(e);
            }
        });
        this.getFriendsList = (userId) => __awaiter(this, void 0, void 0, function* () {
            if (_.isEmpty(userId))
                throw new Error("Invalid Request!");
            try {
                return yield _Repository.getFriendsListByParams({
                    userId: new mongoose.Types.ObjectId(userId),
                    status: "ACCEPT"
                });
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
}
exports.default = RelationshipService;
