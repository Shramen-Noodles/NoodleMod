const ms = require('ms');
const { DiscordAPIError, MessageEmbed, Message } = require("discord.js");
const serverSettings = require('../models/serversettings');

module.exports = {
    name: 'clear',
    aliases: ["purge"],
    description: "purge messages",
    async execute(client, message, args, cmd, Discord){
        
        if(message.member.hasPermission('MANAGE_MESSAGES')){
            if(!args[0]) return message.reply('Incorrect command usage. Please specify the amount of messages to clear.');
        if(isNaN(args[0])) return message.reply('Incorrect command usage. Please type a real number');

        if(args[0] > 100) return message.reply('Incorrect command messages. You can only clear 100 messages at a time');
        if(args[0] < 1) return message.reply('Incorrect command usage. You have to enter a number greater than 1');

        await message.channel.messages.fetch({limit: args[0]}).then(async messages =>{
            message.channel.bulkDelete(messages);
            
            const Number = args[0]
            const newEmbed = new Discord.MessageEmbed()
                .setColor('#c21000')
                .setDescription('✅  Deleted ' + Number + ' Messages ')
                .setFooter('Messages over 14 days old cannot be cleared!')
            const msg = await message.channel.send(newEmbed);
            msg.delete({ timeout:1000 })
            const setting = await serverSettings.findOne({ serverID: message.guild.id }) 
            message.guild.channels.cache.get(`${setting.modLog}`).send(new MessageEmbed()
            .setDescription(`${Number} messages were cleared by <@${message.author.id}> in <#${message.channel.id}>`)
    
        )


    
        })
        } else  {
            message.channel.send('You must have `MANAGE MESSAGES` to run this command!');
        }
        
        
    }
}