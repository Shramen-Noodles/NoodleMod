const db = require('../models/warns.js')
const { Message, MessageEmbed } = require('discord.js')
const profileModel = require('../models/profileSchema')
module.exports = {
    name :'share',
    async execute(client, message, args, cmd, Discord, profileData){
      
        const user = message.mentions.users.first()
        if(!user) return message.channel.send('You gonna give these coins to nobody? I didnt think so. Specify someone to give it to')
        
        const amount = args[1]
        if(!amount) return message.channel.send('specify a number of coins to give to your buddy ol pal')
        if(amount > profileData.coins) return message.channel.send('You cant make spice packets out of thin air, so make sure that its within your wallet range')
        if (isNaN(amount)) return message.channel.send('Send a valid number!')
        if(amount < 0) return message.channel.send('You arent trying to steal, are you?')
        


        await profileModel.findOneAndUpdate(
            {
              userID: user.id, 
            },
            {
              $inc: {
                coins: amount,
              },
            }
          );
          message.channel.send(new Discord.MessageEmbed().setDescription(`I gave them ** ${amount.toLocaleString()} Ramen Spice Packets (RSP) **`).setColor('RED'));
        
        
          await profileModel.findOneAndUpdate(
            {
              userID: message.author.id,
            },
            {
              $inc: {
                coins: -amount,
              },
            }
          );
          return message.channel.send(new Discord.MessageEmbed().setDescription(`I took ** ${amount.toLocaleString()} Ramen Spice Packets (RSP) ** from you`).setColor('RED'));
    }
}