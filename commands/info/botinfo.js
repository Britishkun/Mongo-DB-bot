const { MessageEmbed } = require("discord.js")
module.exports = {
    name: 'botinfo', 
    description: 'Pong!', 
    aliases: ['p'], 
    cooldown: 5, 
    usage: '<member>',
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
     let embed = new MessageEmbed()
     .setTitle(`My info!`)
     .addField("My name", name, true)
     .addField("Channels", channelSize, true)
     .addField("Emojis", emojiSize, true)
     .addField("Servers", guildSize, true)
     .addField("Users", userSize, true)
     .setImage(avatar)
     message.channel.send(embed)
    }
};