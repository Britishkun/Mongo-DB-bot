const Levels = require('discord-xp')
const guildModel = require('../models/guild')
const configModel = require('../models/welcomeLeave')
module.exports = async (client, guild) => {
    const users = await guild.members.fetch()
        users.forEach((user) => {
        Levels.deleteUser(user.id, guild.id)
    })
    await guildModel.findOneAndDelete({ GuildID: guild.id })
    await configModel.findOneAndDelete({ GuildID: guild.id })

}