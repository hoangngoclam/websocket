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
const base_repository_1 = require("./base.repository");
const story_model_1 = require("../models/story.model");
class StoryRepository extends base_repository_1.BaseRepository {
    constructor() {
        super(story_model_1.StoryModel);
    }
    isUserLiked(storyId, userId) {
        return new Promise((resolve, reject) => {
            this.model.find({ likes: { $in: userId } }).exec()
                .then(data => {
                if (data.length)
                    resolve(true);
                resolve(false);
            });
        });
    }
    updateLikes(storyId, userId) {
        return new Promise((resolve, reject) => {
            this.model.update({ _id: storyId }, { $push: { likes: userId } })
                .then(data => resolve(data))
                .catch(err => reject(err));
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.find({}).populate({ path: 'author', select: 'username score avatar displayName' });
        });
    }
    ;
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.model.findOne({ _id: id }).populate({ path: 'author', select: 'username score avatar displayName' });
        });
    }
    ;
}
exports.default = StoryRepository;
