const { MessageEmbed } = require('discord.js')
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "deposite",
    aliases: ["dep"],
    permissions: [],
    cooldown: 1,
    description: "Check the user balance",
    async execute(client, message, args, cmd, Discord, profileData){
        const amount = args[0];
        if(!amount) return message.channel.send('maybe actually send an amount or all to deposit all')
        if(amount <= 0) return message.channel.send(`Deposit amount must be a whole number`)
        if(amount > profileData.coins) return message.channel.send(new MessageEmbed().setDescription(`Deposit amount cant be more than your wallet! ( <:RamenCoin:815247142352322620> ${profileData.coins} RSP)`).setColor('RED'))
        if(amount === "all"){
          const amt = profileData.coins
          try{
            await profileModel.findOneAndUpdate(
                {
                  userID: message.author.id,
                },
                {
                  $inc: {
                    coins: -amt,
                    bank: amt,
                  },
                }
              );

              const embed = new MessageEmbed()
              .setColor(`#c21000`)
              .setDescription(`You deposited <:RamenCoin:815247142352322620> ${amt.toLocaleString()} spice packets into your pot.`)

              return message.channel.send(embed)
        }catch(err){
            console.log(err)
        }
        } else{
          try{
            await profileModel.findOneAndUpdate(
                {
                  userID: message.author.id,
                },
                {
                  $inc: {
                    coins: -amount,
                    bank: amount,
                  },
                }
              );

              const embed = new MessageEmbed()
              .setColor(`#c21000`)
              .setDescription(`You deposited <:RamenCoin:815247142352322620> ${amount.toLocaleString()} spice packets into your pot.`)

              return message.channel.send(embed)
        }catch(err){
            console.log(err)
        }
        }
       
    }
}