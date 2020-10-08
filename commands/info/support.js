const { SUPPORT_INVITE, BOT_INVITE } = require('../../config.json')
const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'support', 
    description: 'Get the support server inv link!', 
    aliases: ['sup'], 
    guildOnly: true, 
    cooldown: 5, 
    usage: '<member>',
    category: 'Info', 
    ownerOnly: false, 
    nsfwOnly: false, 
    execute(client, message, args) {
    let embed = new MessageEmbed()
    .setTitle("Get support")
    .addField("Support invite link:", SUPPORT_INVITE)
    .addField("Bot invite", BOT_INVITE)
    .setFooter(client.footer)
    message.channel.send(embed)
        
     
    }
};