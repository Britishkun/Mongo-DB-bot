const { Schema, model } = require("mongoose")
const config = require("../config.json")
module.exports = model(
    "Guild",
    new Schema({
        GuildID: String,
        prefix: { type: String, default: config.prefix },
        levelMessages: { type: Boolean, default: false },
    }));