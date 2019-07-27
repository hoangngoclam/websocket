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
class BaseService {
    constructor(repository) {
        this.Repository = repository;
    }
    create(item) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.Repository.create(item);
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.Repository.getAll();
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.Repository.getById(id);
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    deleteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.Repository.deleteById(id);
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.Repository.deleteAll();
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
    updateById(id, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.Repository.updateById(id, data);
            }
            catch (e) {
                throw new Error(e);
            }
        });
    }
}
exports.default = BaseService;
