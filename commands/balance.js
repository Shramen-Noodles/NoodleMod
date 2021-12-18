const { MessageEmbed } = require('discord.js')
const profileModel = require('../models/profileSchema')
module.exports = {
    name: "balance",
    aliases: ["bal", "bl"],
    permissions: [],
    cooldown: 5,
    description: "Check the user balance",
    async execute(client, message, args, cmd, Discord, profileData){
      const user = message.mentions.users.first();
      if(!user){
        const meloncost = profileData.melon*20000
        const networth = profileData.coins + profileData.bank + meloncost
        const embed = new MessageEmbed()
        .setColor(`#c21000`)
        .setTitle(`${message.author.username}'s Balance`)
        .addFields(
            {name: `Bowl:`, value: `>>> <:RamenCoin:815247142352322620> ${profileData.coins.toLocaleString()} RSP`},
            {name: `Pot:`, value: `>>> <:RamenCoin:815247142352322620>  ${profileData.bank.toLocaleString()} RSP`},
            {name: `Melons:`, value: `>>> 🍉 ${profileData.melon.toLocaleString()} melons`},
            {name: `Net Worth:`, value: `>>> <:RamenCoin:815247142352322620> ${networth.toLocaleString()} RSP`}
        )
        .setFooter(`RSP = Ramen Spice Packets | Command issued by ${message.author.username}`)
      message.channel.send(embed);
      } else if(user){
        const theirData = await profileModel.findOne({ userID: user.id })
        const theirCost = theirData.melon*20000
        const theirnetworth = theirData.coins + theirData.bank + theirCost
        const embed = new MessageEmbed()
        .setColor(`#c21000`)
        .setTitle(`${user.username}'s Balance`)
        .addFields(
            {name: `Bowl:`, value: `>>> <:RamenCoin:815247142352322620> ${theirData.coins.toLocaleString()} RSP`},
            {name: `Pot:`, value: `>>> <:RamenCoin:815247142352322620>  ${theirData.bank.toLocaleString()} RSP`},
            {name: `Melons:`, value: `>>> 🍉 ${theirData.melon} melons`},
            {name: `Net Worth:`, value: `>>> <:RamenCoin:815247142352322620> ${theirnetworth.toLocaleString()} RSP`}
        )
        .setFooter(`RSP = Ramen Spice Packets | Command issued by ${message.author.username}`)
        message.channel.send(embed)
      }
        
    },
  };