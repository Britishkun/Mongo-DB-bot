const mongoose = require("mongoose")
const { Mongo } = require("../config.json")
const Model = require("../models/welcomeLeave")
module.exports = async (client) => {
    console.log('Active!');
  
    let i = 0

    setInterval(() => {
        const textArray = [
            `My servers ${client.guilds.cache.size}`,
            `My users ${client.users.cache.size}`,
            "My friend count at 0 :O",
            "Spotify :D"
        ]
        const activityArray = [
            "WATCHING",
            "WATCHING",
            "WATCHING",
            "LISTENING"
        ]
  
        client.user.setActivity(textArray[i], { type: activityArray[i] })

        i++ 

        if (i == 3) i = 0
    }, 60000)
    await mongoose.connect(Mongo, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
    }).then(console.log("MongoDB connected"));

     
};