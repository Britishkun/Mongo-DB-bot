const Levels = require('discord-xp')
module.exports = async (client, guild) => {
    const users = guild.members.fetch()
        users.forEach((user) => {
        Levels.deleteUser(member.id, guild.id)
    })

}