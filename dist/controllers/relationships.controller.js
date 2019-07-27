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
const relationship_service_1 = require("../services/relationship.service");
const Service = new relationship_service_1.default();
exports.default = new class RelationshipsController extends base_controller_1.default {
    constructor() {
        super(Service);
    }
    getFriendsList() {
        return (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield Service.getFriendsList(req.params.id)
                    .then(result => res.status(200).json(result));
            }
            catch (e) {
                res.status(400).json({ error: e.message });
            }
        });
    }
    getFollowingList() {
        return (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield Service.getFollowingList(req.params.id)
                    .then(result => res.status(200).json(result));
            }
            catch (e) {
                res.status(400).json({ error: e.message });
            }
        });
    }
    create() {
        return (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield Service.create(req.body)
                    .then(result => res.status(200).json(result));
            }
            catch (e) {
                res.status(400).json({ error: e.message });
            }
        });
    }
};
