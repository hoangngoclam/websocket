"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const config = require("config");
function connect() {
    mongoose.connect(config.get("mongooseURI"), { useNewUrlParser: true })
        .then(() => console.log("MongooseDB connected!"))
        .catch(err => console.log(`MongooseDB can't connect! Error: ${err}`));
}
exports.connect = connect;
