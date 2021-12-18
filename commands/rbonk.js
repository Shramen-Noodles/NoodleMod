const bk = require('../models/bonks.js');
const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'rbonk',
    async execute(client, message, args, cmd, Discord, profileData){
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You must have `MANAGE MESSAGES` to run this command!')
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.channel.send('User not found.')
        bk.findOne({ guildid : message.guild.id, user: user.user.id}, async(err,data) => {
            if(err) throw err;
            if(data) {
                let number = parseInt(args[1]) - 1
                data.content.splice(number, 1)
                message.channel.send('removed a bonk')
                data.save()
            const setting = await serverSettings.findOne({ serverID: message.guild.id }) 
            message.guild.channels.cache.get(`${setting.modLog}`).send(new MessageEmbed()
                .setDescription(`A bonk has been removed from *** ${user} *** by <@${message.author.id}>`)
                )
            } else {
                message.channel.send('This user does not have any warns')
            }
        })
    }
}