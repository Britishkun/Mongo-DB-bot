const { Schema, model } = require("mongoose")
module.exports = model(
    "Verify",
    new Schema({
        GuildID: String,
        VerifyRole: String,
        enabled: { type: Boolean, default: false }
    })
)