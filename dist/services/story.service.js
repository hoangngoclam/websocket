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
const base_service_1 = require("./base.service");
const story_repository_1 = require("../database/repositories/story.repository");
const uploadFile_service_1 = require("./uploadFile.service");
const Repository = new story_repository_1.default();
class StoryService extends base_service_1.default {
    constructor() {
        super(Repository);
    }
    createNewStory(request) {
        return __awaiter(this, void 0, void 0, function* () {
            let uploadFileService = new uploadFile_service_1.default();
            let jsonUploadFile = yield uploadFileService.uploadFile('photo', request);
            let postUrl = jsonUploadFile.data.imageUrl;
            return new Promise((resolve, reject) => {
                let dataInput = request.body;
                dataInput.photo = postUrl;
                this.create(dataInput).then(data => { resolve(data); })
                    .catch(err => reject(err));
            });
        });
    }
    updateLike(storyId, userId) {
        return __awaiter(this, void 0, void 0, function* () {
            let isLiked = yield Repository.isUserLiked(storyId, userId);
            return new Promise((resolve, reject) => {
                if (!isLiked) {
                    resolve(Repository.updateLikes(storyId, userId));
                }
                else {
                    reject({ success: false });
                }
            });
        });
    }
}
exports.default = StoryService;
