const config = require('./config.json');
const Discord = require('discord.js');
const client = new Discord.Client();
const glob = require('glob');
const mongoose = require("mongoose")
const logs = require("discord-logs")
logs(client)
const guildModel = require('./models/guild')
client.prefix = guildModel.prefix;
client.cooldowns = new Discord.Collection();
client.commands = new Discord.Collection();
client.queue = new Map();
const commandFiles = glob.sync('./commands/**/*.js');
for (const file of commandFiles) {
  const command = require(file);
  client.commands.set(command.name, command);
};
mongoose.connect(config.Mongo, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true })
const eventFiles = glob.sync('./events/**/*.js');
for (const file of eventFiles) {
  const event = require(file);
  const eventName = /\/events.(.*).js/.exec(file)[1];
  client.on(eventName, event.bind(null, client));
};

client.login(config.token);