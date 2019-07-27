"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Message {
    constructor() {
    }
    getErrorMessage(message = "something") {
        return JSON.stringify({ type: "ERROR", message: message });
    }
    getSuccessMessage(message = "something") {
        return JSON.stringify({ type: "SUCCESS", message: message });
    }
    getDefaultMessage(message = "something") {
        return JSON.stringify({ type: "MESSAGE", message: message });
    }
    getUserMessage(message = "something") {
        return JSON.stringify({ type: "USER", message: message });
    }
}
exports.default = Message;
