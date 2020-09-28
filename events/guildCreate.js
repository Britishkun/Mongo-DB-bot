const guildModel = require("../models/guild")
const config = require("../config.json")
module.exports = async (client, guild) => {
    let guild = new guildModel(
        {
            GuildID: guild.id,
            prefix: config.prefix
        }
    )

}