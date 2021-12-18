const profileModel = require('../models/profileSchema')
module.exports = {
    name: "join",
    async execute(client, message, args, cmd, Discord, profileData){
        const action = args[0]
        if(!action) return message.channel.send('maybe actually specify what job you wanna join? Do -jobs for a list of the jobs')
        if(action === "streamer"){
            if(profileData.pc < 1 ) return message.reply('You need a Gaming PC in order to stream!')
            
            /*const choices = [
                "1",
                "2",
                "3",
                "4",
                "5",
            ]
            const choice = choices[Math.floor(Math.random() * choices.length)]
            if(choice === "1"){
                const embed = new Discord.MessageEmbed()
                .setDescription('You had a decent stream. You earned 1,500 RSP for that one!')
                .setColor('PURPLE')
                await profileModel.findOneAndUpdate(
                    {
                        userID: message.author.id,
                    },
                    {
                        $inc: {
                            coins: 1500
                        }
                    }
                )
                return message.channel.send(embed)
            }*/
        
            const embed = new Discord.MessageEmbed()
            .setDescription('You succesfully became a Twitch Streamer! Congratulations! Make sure to do -work every day to claim your income!')
            .setColor("RED")
            await profileModel.findOneAndUpdate(
                {
                  userID: message.author.id,
                },
                {
                  job: "streamer"
                }
              );
              return message.reply(embed)
        } else if(action === "chef"){
            const former = profileData.oven
            if(former > 0){
            const embed = new Discord.MessageEmbed()
            .setDescription('You succesfully became a Chef! Congratulations! Do -bake!')
            .setColor("RED")
            await profileModel.findOneAndUpdate(
                {
                  userID: message.author.id,
                },
                {
                  job: "chef",
                }
              );
              return message.reply(embed)
            }else{
                if(profileData.coins < 50000) return message.channel.send('You must have 50,000 RSP in your wallet to get this job!')
            const embed = new Discord.MessageEmbed()
            .setDescription('You succesfully became a Chef! Congratulations! Do -bake!')
            .setColor("RED")
            await profileModel.findOneAndUpdate(
                {
                  userID: message.author.id,
                },
                {
                  job: "chef",
                  $inc: {
                      coins: -50000,
                      oven: 1
                  }
                }
              );
              return message.reply(embed)
            }
            
        } else if(action === "doctor"){
            
            if(profileData.doctor === "yes"){
              const embed = new Discord.MessageEmbed()
            .setDescription('You succesfully became a Doctor! Congratulations! Make sure to do -work every day to claim your income!')
            .setColor("RED")
            await profileModel.findOneAndUpdate(
                {
                  userID: message.author.id,
                },
                {
                  job: "doctor",
                }
              );
              return message.reply(embed)
            }
            if(profileData.bank < 1000000) return message.channel.send('You must have a minimum of 1,000,000 RSP to pay for school (oof)!')
            const embed = new Discord.MessageEmbed()
            .setDescription('You succesfully became a Doctor! Congratulations! Make sure to do -work every day to claim your income!')
            .setColor("RED")
            await profileModel.findOneAndUpdate(
                {
                  userID: message.author.id,
                },
                {
                  job: "doctor",
                  doctor: "yes",
                  $inc: {
                      bank: -1000000,
                  }
                }
              );
              return message.reply(embed)
        } else if(action === "entrepreneur"){
            if(profileData.coins < 10000) return message.channel.send('You must put in a 10,000 dollar investment!')
            const embed = new Discord.MessageEmbed()
            .setDescription('You succesfully became an Entreprenuer! Congratulations! Make sure to do -work every day to claim your income!')
            .setColor("RED")
            await profileModel.findOneAndUpdate(
                {
                  userID: message.author.id,
                },
                {
                  job: "entrepreneur",
                  $inc: {
                      coins: -10000,
                  }
                }
              );
              return message.reply(embed)
        }
    }
}
