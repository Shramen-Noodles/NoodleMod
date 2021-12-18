const { MessageEmbed } = require('discord.js')
const serverSettings = require('../models/serversettings')
module.exports = {
    name: 'unmute',
    description: "unmutes people",
    async execute(client, message, args, cmd, Discord){

        if(message.member.hasPermission('MANAGE_MESSAGES')){

            const target = message.mentions.users.first(); 
            if(target){
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

                let memberTarget = message.guild.members.cache.get(target.id);

                memberTarget.roles.remove(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been unmuted`)
                const setting = await serverSettings.findOne({ serverID: message.guild.id }) 
                message.guild.channels.cache.get(`${setting.modLog}`).send(new MessageEmbed()
            .setDescription(`<@${memberTarget.user.id}> has been unmuted by <@${message.author.id}>`)
        )
            } else{
                message.channel.send("User not found.");
            }
            
        } else if(message.member.roles.cache.has('808043455255150612')){

            const target = message.mentions.users.first(); 
            if(target){
                let mainRole = message.guild.roles.cache.find(role => role.name === 'Member');
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Muted');

                let memberTarget = message.guild.members.cache.get(target.id);

                memberTarget.roles.remove(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> has been unmuted`)
            } else{
                message.channel.send("User not found.");
            }
            
        } else  {
            message.channel.send('You must have `MANAGE MESSAGES` to run this command!');
                }
        
    }
}