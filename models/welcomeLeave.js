const { Schema, model } = require('mongoose')

module.exports = model(
    "Welcome",
    new Schema({
        GuildID: String,
        welcomeChannelId: String,
        leaveChannelId: String,
    })
)