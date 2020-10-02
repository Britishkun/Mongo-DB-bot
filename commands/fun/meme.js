const { MessageEmbed } = require("discord.js");
const fetch = require("node-fetch");
module.exports = {
    name: 'meme', 
    description: 'get a meme', 
    aliases: ['m'], 
    cooldown: 3, 
    usage: '',
    category: 'Fun', 
    ownerOnly: false, 
    nsfwOnly: false, 
    async execute(client, message, args) {
        const data = await fetch("https://meme-api.herokuapp.com/gimme").then(res => res.json());
        const embed = new MessageEmbed()
        .setTitle(data.title)
        .setImage(data.url)
        .setDescription(`[click me!](${data.url})`)
     message.channel.send(embed)
    }
};