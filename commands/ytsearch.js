const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const Discord = require('discord.js')
const { MessageManager } = require('discord.js');

const queue = new Map();
// queue(message.guild.id, queue_constructor object { voice channel, text channel, connection, song[]);

module.exports = {
    name: 'ytsearch',
    cooldown: 0,
    description: 'Joins and plays a video from youtube',
    async execute(client, message, args, cmd, Discord) {

        if(!message.channel.nsfw) return message.channel.send('*Unfortunatley, Top.GG does not allow this command to be used in non-nsfw channels! Sorry!')
        
        const videoFinder = async (query) => {
            const videoResult = await ytSearch(query);
            return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
        }

        const video = await videoFinder(args.join(' '));

        //If video found, then, create a song.
        if (video) {
            message.channel.send(`${video.url}`)

        }
        else {

            const embed = new Discord.MessageEmbed()
            .setTitle('Music')
            .setDescription('No videos found for that search term')
            .setColor(`#c21000`)
            return message.channel.send(embed);
        }
    }
}