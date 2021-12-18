const profileModel = require('../models/profileSchema')
module.exports = {
    name: "quit",
    async execute(client, message, args, cmd, Discord, profileData){
        
        const embed = new Discord.MessageEmbed()
                    .setDescription('You quit your job and are now unemployed')
                    .setColor('RED')
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            job: "unemployed",
                        }
                    )
                    return message.reply(embed)
    }
}