const mongoose = require("mongoose")
const { Mongo } = require("../config.json")
module.exports = async (client) => {
    console.log('Active!');
  
    let i = 0

    setInterval(() => {
        const textArray = [
            "You",
            "with you",
            "My prefix t!"
        ]
        const activityArray = [
            "WATCHING",
            "PLAYING",
            "WATCHING"
        ]
  
        client.user.setActivity(textArray[i], { type: activityArray[i] })

        i++ 

        if (i == 3) i = 0
    }, 60000)
    await mongoose.connect(Mongo, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
    }).then(console.log("MongoDB connected"))
};