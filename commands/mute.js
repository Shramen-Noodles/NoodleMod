const ms = require('ms');
const serverSettings = require('../models/serversettings')
const { MessageEmbed } = require(`discord.js`)
const mute = require('../models/mute')
module.exports = {
    name: 'mute',
    description: "mutes people",
    async execute(client, message, args, cmd, Discord){
        const mm = await mute.findOne({ serverID: message.guild.id })

        if(message.member.hasPermission('MANAGE_MESSAGES')){
            const ss = await serverSettings.findOne({ serverID: message.guild.id })
            if(!ss.muterole) return message.channel.send('The muting system isnt set up yet. Do -set muterole @role to set a role as the muterole.')
            const target = message.mentions.users.first(); 
if(target){
    let memberTarget = message.guild.members.cache.get(target.id);

    if(!args[1]){
        memberTarget.roles.add(`${ss.muterole}`);
        message.channel.send(`<@${memberTarget.user.id}> has been muted`);
        message.guild.channels.cache.get(`${ss.modLog}`).send(new MessageEmbed()
            .setDescription(`<@${memberTarget.user.id}> has muted by <@${message.author.id}>`)
        )
        await mute.findOneAndUpdate(
            {
                serverID: message.guild.id,
                userID: target.id,
            },
            {
                muted: "yes",
                $inc: {
                    mutes: 1,
                }
            }
        )
        return
    }


    memberTarget.roles.add(`${ss.muterole}`);
    const mod = message.author.id
    message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);
    message.guild.channels.cache.get(`${ss.modLog}`).send(new MessageEmbed()
            .setDescription(`<@${memberTarget.user.id}> has muted by <@${message.author.id}> for ${ms(ms(args[1]))}`)
        )
    await mute.findOneAndUpdate(
        {
            serverID: message.guild.id,
            userID: target.id,
        },
        {
            muted: "yes",
            $inc: {
                mutes: 1
            }
        }
    )

    setTimeout(async function () { 
        memberTarget.roles.remove(`${ss.muterole}`);
        message.channel.send(`<@${memberTarget.user.id}> has been unmuted`);
        await mute.findOneAndUpdate(
            {
                serverID: message.guild.id,
                userID: target.id,
            },
            {
                muted: "no",
            }
        )
        message.guild.channels.cache.get(`${ss.modLog}`).send(new MessageEmbed()
            .setDescription(`<@${memberTarget.user.id}> has been unmuted by the auto-timer after being muted by <@${message.author.id}>`)
        )
    }, ms(args[1]));
} else{
    message.channel.send("User not found.");
}
        } else  {
            message.channel.send('You must have `MANAGE MESSAGES` to run this command!');
        }
        
    }

}