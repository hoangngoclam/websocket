"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_repository_1 = require("./base.repository");
const relationship_model_1 = require("../models/relationship.model");
const mongoose = require("mongoose");
class RelationshipRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(relationship_model_1.RelationshipModel);
    }
    isFriend(userId, friendId) {
        return new Promise((resolve, reject) => {
            this.model.aggregate([
                {
                    $match: {
                        userId: new mongoose.Types.ObjectId(userId),
                        friendId: new mongoose.Types.ObjectId(friendId)
                    }
                }
            ]).exec((err, result) => {
                (err) && reject(err);
                (result.length) ? resolve(true) : resolve(false);
            });
        });
    }
    ;
    getFriendsListByParams(params = {}) {
        return new Promise((resolve, reject) => {
            this.model.aggregate([
                {
                    $match: params
                },
                {
                    $lookup: {
                        from: "users",
                        localField: "friendId",
                        foreignField: "_id",
                        as: "friend"
                    }
                },
                { $unwind: '$friend' },
                {
                    '$project': {
                        "status": "$status",
                        "friendId": "$friendId",
                        "friend.id": "$friend._id",
                        "friend.avatar": "$friend.avatar",
                        "friend.username": "$friend.username",
                        "friend.displayName": "$friend.displayName",
                        "friend.role": "$friend.role",
                        "createdAt": "$createdAt",
                        "updatedAt": "$updatedAt",
                    }
                }
            ]).exec((err, result) => {
                (err) && reject(err);
                resolve(result);
            });
        });
    }
}
exports.default = RelationshipRepository;
