const { MessageEmbed } = require('discord.js')
const profileModel = require("../models/profileSchema");

module.exports = {
    name: "withdraw",
    aliases: ["with"],
    permissions: [],
    cooldown: 1,
    description: "Check the user balance",
    async execute(client, message, args, cmd, Discord, profileData){
        const amount = args[0];
        if(amount <= 0) return message.channel.send(`Deposit amount must be a whole number`)
        if(amount > profileData.bank) return message.channel.send(new MessageEmbed().setDescription(`Withdrawal amount cant be more than your bank! ( <:RamenCoin:815247142352322620> ${profileData.bank} RSP)`).setColor('RED'))
        if(amount === "all"){
          const amt = profileData.bank
          try{
            await profileModel.findOneAndUpdate(
                {
                  userID: message.author.id,
                },
                {
                  $inc: {
                    coins: amt,
                    bank: -amt,
                  },
                }
              );

              const embed = new MessageEmbed()
              .setColor(`#c21000`)
              .setDescription(`You withdrawed <:RamenCoin:815247142352322620> ${amt.toLocaleString()} spice packets from your pot.`)

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
                    coins: amount,
                    bank: -amount,
                  },
                }
              );

              const embed = new MessageEmbed()
              .setColor(`#c21000`)
              .setDescription(`You withdrawed <:RamenCoin:815247142352322620> ${amount.toLocaleString()} spice packets from your pot.`)

              return message.channel.send(embed)
        }catch(err){
          message.channel.send('There was an error!')
            console.log(err)
        }
        }
       
    }
}