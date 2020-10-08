const guildModel = require("../models/guild")
const WelcomeModel = require("../models/welcomeLeave")
const config = require("../config.json")
module.exports = async (client, guild) => {
    let Guild = new guildModel(
        {
            GuildID: guild.id,
            prefix: config.prefix
        }
    )
    Guild.save()
    let welcomeModel = new WelcomeModel(
        {
            GuildID: guild.id,
            levelMessages: false,
        }
    )
    welcomeModel.save()
}