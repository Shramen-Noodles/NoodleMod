const profileModel = require("../models/profileSchema");
module.exports = {
  name: "beg",
  description: "beg for coins",
  cooldown: 10,
  async execute(client, message, args, cmd, Discord, profileData) {
    const boosts = profileData.begboost
    if(boosts > 0){
      const randomNumber = Math.floor(Math.random() * 700) + 100;
    const response = await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          coins: randomNumber,
          begboost: -1,
        },
      }
    );
    return message.channel.send(`I gave you <:RamenCoin:815247142352322620> ** ${randomNumber.toLocaleString()} Ramen Spice Packets (RSP) ** with your Beg Boost!`);
    } else{
      const randomNumber = Math.floor(Math.random() * 100) + 1;
    const response = await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          coins: randomNumber,
        },
      }
    );
    return message.channel.send(`I gave you <:RamenCoin:815247142352322620> ** ${randomNumber} Ramen Spice Packets (RSP) **`);
    }
    
  },
};
