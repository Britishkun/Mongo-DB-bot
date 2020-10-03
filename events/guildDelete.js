const Levels = require('discord-xp')
const guildModel = require('../models/guild')
const configModel = require('../models/welcomeLeave')
module.exports = async (client, guild) => {
    const users = guild.members.fetch()
        users.forEach((user) => {
        Levels.deleteUser(user.id, guild.id)
    })
    await guildModel.findOneAndRemove({ GuildID: guild.id })
    await configModel.findOneAndRemove({ GuildID: guild.id })

}