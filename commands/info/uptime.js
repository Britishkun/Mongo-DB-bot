require('moment-duration-format')
const moment = require("moment")
module.exports = {
    name: 'uptime', 
    description: 'Uptime of the bot', 
    aliases: ['up'], 
    guildOnly: false, 
    cooldown: 5, 
    category: 'Info', 
    ownerOnly: false, 
    nsfwOnly: false, 
    execute(client, message, args) {
        const uptime = moment
        .duration(client.uptime)
        .format(" D [days], H [hours], m [minutes], s [seconds]");

        message.channel.send(`\`\`\`${uptime}\`\`\``)
    }
};