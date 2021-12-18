const profileModel = require("../models/profileSchema");
module.exports = {
  name: "bake",
  description: "beg for coins",
  cooldown: 10,
  async execute(client, message, args, cmd, Discord, profileData) {
    const job = profileData.job
    const boosts = profileData.cookieboost
    if(boosts > 0 && job === "chef"){
      if(profileData.stove < 1) return message.channel.send('You cannot bake without a stove! Visit the shop using -buy to get one!')
    const randomNumber = Math.floor(Math.random() * 150) + 25;
    await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          cookies: randomNumber,
          cookieboost: -1,
        },
      }
    );
    return message.reply(`You baked 🍪 ** ${randomNumber} Cookies with your Cookie Boost  and Chef Bonus!**`); 
    } else if(job === "chef"){
      if(profileData.stove < 1) return message.channel.send('You cannot bake without a stove! Visit the shop using -buy to get one!')
    const randomNumber = Math.floor(Math.random() * 100) + 20;
    await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          cookies: randomNumber,
        },
      }
    );
    return message.reply(`You baked 🍪 ** ${randomNumber} Cookies with your Chef's Bonus!**`);
    }else if(boosts > 0){
      if(profileData.stove < 1) return message.channel.send('You cannot bake without a stove! Visit the shop using -buy to get one!')
    const randomNumber = Math.floor(Math.random() * 50) + 5;
    await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          cookies: randomNumber,
          cookieboost: -1,
        },
      }
    );
    return message.reply(`You baked 🍪 ** ${randomNumber} Cookies with your Cookie Boost!**`); 
    } else if(job === "chef"){
      if(profileData.stove < 1) return message.channel.send('You cannot bake without a stove! Visit the shop using -buy to get one!')
    const randomNumber = Math.floor(Math.random() * 100) + 20;
    await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          cookies: randomNumber,
        },
      }
    );
    return message.reply(`You baked 🍪 ** ${randomNumber} Cookies with your Chef's Bonus!**`);
    } else if(message.member.id = "689934581645705259"){
      const randomNumber = Math.floor(Math.random() * 2) + 5;
    await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          cookies: randomNumber,
        },
      }
    );
    return message.reply(`You baked 🍪 ** ${randomNumber} Cookies!**`);
    } else{
      if(profileData.stove < 1) return message.channel.send('You cannot bake without a stove! Visit the shop using -buy to get one!')
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    await profileModel.findOneAndUpdate(
      {
        userID: message.author.id,
      },
      {
        $inc: {
          cookies: randomNumber,
        },
      }
    );
    return message.reply(`You baked 🍪 ** ${randomNumber} Cookies!**`);
    }
    
  },
};
