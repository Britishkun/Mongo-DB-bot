const { MessageEmbed } = require("discord.js");
module.exports = {
    name: 'servers', 
    description: 'botowner only!', 
    aliases: ['guilds'], 
    guildOnly: false, 
    cooldown: 0, 
    category: 'Owner', 
    ownerOnly: true, 
    nsfwOnly: false, 
    execute(client, message, args) {
        const guilds = client.guilds.cache;

    const embed = new MessageEmbed()
      .setTitle(`Guilds for ${client.user.username}`)
      .setColor("BLUE")
      .setFooter(message.author.tag);

    let description = "";
    guilds.forEach((guild) => {
      description += `**${guild.name}:** Id: ${guild.id}\n`;
    });

    embed.setDescription(description);

    message.channel.send(embed);
    }
};