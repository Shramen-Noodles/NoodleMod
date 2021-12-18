const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'info',
    aliases: ['i', 'information'],
    description: "displays a list of all commands",
    execute(client, message, args, Discord){
        const embed = new MessageEmbed()
        .setColor('#c21000')
        .setTitle('information')
        .setDescription('Hello and welcome into the ***Shramen Kingdom*** , I am the custom Discord bot coded by Shramen Noodles. Please run -help to see my other commands which vary from entertainment to many many more. Hope you enjoy your stay!')
        .addFields(
            {name: 'Shramen info', value: '`Shramen is a content creator on YouTube and a Twitch Affiliate. He is happy to have you guys in the discord server and loves talking with his viewers. He really appreciated every subscriber and follower! All his socials are listed below!'},
            {name: 'YouTube', value: ' https://www.youtube.com/shramennoodles : The main youtube channel with weekly uploads on the Hinscraft SMP, the Hinsblock Server, Bedwars Montages, and also a lot more'},
            {name: 'Twitch', value: 'https://www.twitch.tv/shramennoodles : Shramen tries to stream every weekend a couple of times and really has a great experience streaming and loves to see you guys in the chat!'},
            {name: 'Discord', value: 'https://discord.io/shramen : invite people to the server with your own link or this universal link`'},
            {name: 'Twitter', value: 'https://www.twitter.com/ShramenN : Announcements and other things'},
            {name: 'Pet YT', value: 'https://www.youtube.com/shramenshorts : Shramens pet rabbit!'},
            {name: 'Recipes YT', value: 'https://www.youtube.com/channel/UChgvGWJBLXJQv8gpThSCOzQ : Recipe videos by Shramen Noodles!'}
        )
    
        .setFooter('More questions? Ask Shramen Noodles!');

        message.channel.send(embed);
    }
}