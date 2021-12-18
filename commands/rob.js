const { MessageEmbed } = require('discord.js');
const profileModel = require('../models/profileSchema.js')

module.exports = {
    name : 'rob',
    cooldown: 100,
    async execute(client, message, args, cmd, Discord, profileData){
        if(profileData.coins < 5000){
            return message.channel.send('You must have a minimum of 5,000 RSP in your wallet to rob someone')
        }
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.channel.send('User not found.')
        const wallet = await profileModel.findOne({ userID: user.id })
        const robBal = wallet.coins
        const sec = wallet.security
        if(robBal < 100) return message.channel.send('it isnt worth robbing someone with under 100 coins...')
        const robBalance = robBal / 2


        if(sec){
            const embed  = new MessageEmbed().setDescription(`Oh no! Their security went off and you were caught! You have been fined 5,000 RSP!`).setColor("RED")
            await profileModel.findOneAndUpdate(
                {
                    userID: message.author.id
                },
                {
                    $inc: {
                        coins: -5000,
                    },
                }
            );

            await profileModel.findOneAndUpdate(
                {
                    userID: user.id,
                },
                {
                    $inc: {
                        security: -1
                    }
                }
            )
            return message.channel.send(embed)
        } else{
            const choices = [
              "1",
              "A local cop was patrolling and you were fined 5,000 dollars!",
              "The neighbors saw what you were doing and whacked you until your foot broke. You got beat by old people. Congrats, your hospital bill is 5,000!",
              "1",
              "1",
              "1",
              "AH what bad luck, an ambulance ran over you and now you were fined 5,000 for the damage to the ambulance, and they returned the wallet to its rightful owner (NOT YOU)."
            ]
            const choice = choices[Math.floor(Math.random() * choices.length)]

            if(choice === "1"){
              await profileModel.findOneAndUpdate(
                {
                  userID: user.id, 
                },
                {
                  $inc: {
                    coins: -robBalance,
                  },
                }
              );
             
              await profileModel.findOneAndUpdate(
                {
                  userID: message.author.id,
                },
                {
                  $inc: {
                    coins: robBalance,
                  },
                }
              );
              return message.channel.send(new Discord.MessageEmbed().setDescription(`Stole ** ${robBalance} Ramen Spice Packets (RSP) ** from them`).setColor('RED'));
            } else{
              await profileModel.findOneAndUpdate(
                {
                  userID: user.id, 
                },
                {
                  $inc: {
                    coins: 5000,
                  },
                }
              );
             
              await profileModel.findOneAndUpdate(
                {
                  userID: message.author.id,
                },
                {
                  $inc: {
                    coins: -5000,
                  },
                }
              );
              return message.channel.send(new Discord.MessageEmbed().setDescription(`${choice}`).setColor('RED'));
            }

          
        }
    }
}