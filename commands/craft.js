const profileModel = require('../models/profileSchema')
module.exports = {
    name: "craft",
    cooldown: 10,
    async execute(client, message, args, cmd, Discord, profileData){
        if(profileData.art < 1) return message.channel.send('You need art supplies to make something!')
        await profileModel.findOneAndUpdate(
            {
              userID: message.author.id,
            },
            {
              $inc: {
                projects: 1,
                art: -1,
              },
            }
          );
          return message.channel.send(`You made an art project! You can sell it on etsy now!`);
    }
}