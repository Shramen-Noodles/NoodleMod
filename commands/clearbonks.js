const serverSettings = require('../models/serversettings')
const { MessageEmbed } = require(`discord.js`);
const bk = require('../models/bonks.js');
module.exports = {
    name : 'clearbonks',
    aliases: ["cbonks"],
    async execute(client, message, args, cmd, Discord, profileData){
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You must have `MANAGE MESSAGES` to run this command!')
        const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        if(!user) return message.channel.send('User not found.')
        bk.findOne({ guildid : message.guild.id, user: user.user.id}, async(err,data) => {
            if(err) throw err;
            if(data) {
                await bk.findOneAndDelete({ user : user.user.id, guildid: message.guild.id})
                message.channel.send(`Cleared ${user.user.tag}'s bonks`)
                const setting = await serverSettings.findOne({ serverID: message.guild.id }) 
                message.guild.channels.cache.get(`${setting.modLog}`).send(new MessageEmbed()
            .setDescription(`${user}'s bonks have been cleared by <@${message.author.id}>`)
            )
            } else {
                message.channel.send('This user does not have any bonks')
            }
        })
    }
}