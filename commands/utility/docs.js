const fetch = require('node-fetch');

module.exports = {
    name: "docs",
    description: "Shows Complete Docs Of DJS",
    category: "Utility",
    aliases: ["djs"],
    ownerOnly: false, 
    nsfwOnly: false, 
    async execute(client, message, args) {

const query = args.join(' ');

const url = `https://djsdocs.sorta.moe/v2/embed?src=stable&q=${encodeURIComponent(query)}`;

fetch(url)

    .then(res => res.json())
    .then(embed => {

        if (embed && !embed.error) {

            message.channel.send({ embed });
        } else {

            message.reply(`No Such Result Found for **"${query}"**`);
        }
    })
    .catch(e => {

        console.error(e);
        message.reply('Darn it! I failed!');
    })
}
}