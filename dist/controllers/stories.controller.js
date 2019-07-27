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
const base_controller_1 = require("./base.controller");
const story_service_1 = require("../services/story.service");
const Service = new story_service_1.default();
exports.default = new class StoriesController extends base_controller_1.default {
    constructor() {
        super(Service);
    }
    createNew() {
        console.log("inside controller");
        return (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.service.createNewStory(req)
                    .then(result => res.status(200).json(result));
            }
            catch (e) {
                res.status(404).json({ error: e.message });
            }
        });
    }
    updateLike() {
        return (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.service.updateLike(req.params.id, req.body.userId)
                    .then(result => res.status(200).json(result));
            }
            catch (e) {
                res.status(404).json({ error: e.message });
            }
        });
    }
};
