const canvas  = require('discord-canvas');
const { MessageAttachment } = require('discord.js');
const shop = new canvas.FortniteShop()
module.exports = {
    name: 'fortniteshop', 
    description: 'eee!', 
    aliases: ['fnshop'], 
    category: 'Info', 
    ownerOnly: false, 
    nsfwOnly: false, 
    async execute(client, message, args) {
     let image = await shop
     .setToken("1e48014d-cead-4516-94ba-bbccaaaa9b2d")
     .toAttachment()

     let attachment = new MessageAttachment(image, "fortniteshop.png")

     message.channel.send(attachment)
    }
};