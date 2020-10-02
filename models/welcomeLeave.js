const { Schema, model } = require('mongoose')

module.exports = model(
    "Config",
    new Schema({
        GuildID: String,
        welcomeChannelId: String,
        leaveChannelId: String,
        autoRole: String,
        logChannel: String,
        levelMessages: { type: Boolean, default: false },
        modlog: String,
    })
)