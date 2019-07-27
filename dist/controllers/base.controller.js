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
class BaseController {
    constructor(service) {
        this.service = service;
    }
    create() {
        return (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.service.create(req.body)
                    .then(result => res.status(200).json(result));
            }
            catch (e) {
                res.status(400).json({ error: e.message });
            }
        });
    }
    getAll() {
        return (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.service.getAll()
                    .then(result => res.status(200).json(result));
            }
            catch (e) {
                res.status(404).json({ error: e.message });
            }
        });
    }
    getById() {
        return (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.service.getById(req.params.id)
                    .then(result => res.status(200).json(result));
            }
            catch (e) {
                res.status(404).json({ error: e.message });
            }
        });
    }
    deleteById() {
        return (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.service.deleteById(req.params.id)
                    .then(result => res.status(201).json(result));
            }
            catch (e) {
                res.status(400).json({ error: e.message });
            }
        });
    }
    deleteAll() {
        return (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.service.deleteAll()
                    .then(result => res.status(201).json(result));
            }
            catch (e) {
                res.status(400).json({ error: e.message });
            }
        });
    }
    updateById() {
        return (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.service.updateById(req.params.id, req.body)
                    .then(result => res.status(200).json(result));
            }
            catch (e) {
                res.status(400).json({ error: e.message });
            }
        });
    }
}
exports.default = BaseController;
