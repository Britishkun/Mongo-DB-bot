require('moment-duration-format')
const { MessageEmbed } = require("discord.js")
const moment = require('moment')
module.exports = {
    name: 'botinfo', 
    description: 'eeeeeeeeeeeeeeeeeeeeeeeeeeee!', 
    aliases: ['bot'], 
    cooldown: 5, 
    category: 'Info', 
    ownerOnly: false, 
    nsfwOnly: false, 
    async execute(client, message, args) {
     let channelSize = client.channels.cache.size;
     let emojiSize = client.emojis.cache.size;
     let guildSize = client.guilds.cache.size;
     let userSize = client.users.cache.size;
     let name = client.user.username;
     let avatar = client.user.displayAvatarURL();
     const uptime = moment
     .duration(client.uptime)
     .format(" D [days], H [hrs], m [mins], s [secs]");
     let vcConnect = client.voice.connections.size;
     let embed = new MessageEmbed()
     .setTitle(`My info!`)
     .addField("My name", name, true)
     .addField("Channels", channelSize, true)
     .addField("Emojis", emojiSize, true)
     .addField("Servers", guildSize, true)
     .addField("Users", userSize, true)
     .addField("Uptime", uptime, true)
     .addField("Commands", client.commands.size, true)
     .addField("Voice connections", vcConnect, true)
     .setThumbnail(avatar)
     message.channel.send(embed)
    }
};