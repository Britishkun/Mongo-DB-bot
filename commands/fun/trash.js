const canvacord = require('canvacord')
const { MessageAttachment } = require("discord.js")
module.exports = {
    name: 'trash', 
    description: 'trash a user!', 
    aliases: ['tra'], 
    cooldown: 5, 
    usage: '<member>',
    category: 'Fun', 
    ownerOnly: false, 
    nsfwOnly: false, 
    async execute(client, message, args) {
        const user = message.mentions.members.first() || client.users.cache.get(args[0])
       
        if(!user) {
            const image = message.author.displayAvatarURL({ format: "png" })
            const slap = await canvacord.Canvas.trash(image)
            let attachment = new MessageAttachment(slap, "trash.png")
            return message.channel.send(attachment)
   
        }
    if(user) {
        const image1 = user.displayAvatarURL({ format: "png" })
        const slap = await canvacord.Canvas.trash(image1)
        let attachment = new MessageAttachment(slap, "trash.png")
        return message.channel.send(attachment)
    }
    }
};