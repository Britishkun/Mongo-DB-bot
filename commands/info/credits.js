const { MessageEmbed } = require('discord.js')
module.exports = {
    name: 'credits', 
    description: 'We have people that helped us here we give them a credit :D', 
    aliases: ['cred'], 
    guildOnly: false, 
    cooldown: 3, 
    usage: '',
    category: 'Info', 
    ownerOnly: false, 
    nsfwOnly: false, 
    execute(client, message, args) {
     let embed = new MessageEmbed()
     .setTitle("Credits from Tovade")
     .addField("Coltz", "Has helped us fixing erros", true)
     .addField("Evobot", "For our music system", true)
     .addField("Ghostybot", "For most of bot commands", true)
     .setThumbnail(client.user.displayAvatarURL())
     .setFooter(client.footer)
     message.channel.send(embed)
    }
};