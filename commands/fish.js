const profileModel = require("../models/profileSchema");
module.exports = {
  name: "fish",
  description: "beg for coins",
  cooldown: 10,
  async execute(client, message, args, cmd, Discord, profileData) {
    const boosts = profileData.fishboost
    if(boosts > 0){
      if(profileData.rod < 1) return message.channel.send('You cannot fish without a fishing rod! Visit the shop using -buy to get one!')
    const randomNumber = Math.floor(Math.random() * 20) + 5;
    const response = await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          fish: randomNumber,
          fishboost: -1,
        },
      }
    );
    return message.reply(`You went fishing and got 🐟 ** ${randomNumber} Fish with your Fish Boost! **`);
    } else{
      if(profileData.rod < 1) return message.channel.send('You cannot fish without a fishing rod! Visit the shop using -buy to get one!')
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    const response = await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          fish: randomNumber,
        },
      }
    );
    return message.reply(`You went fishing and got 🐟 ** ${randomNumber} Fish **`);
    }
    
  },
};
