const ytdl = require('ytdl-core');
const ytSearch = require('yt-search');
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js');
const distube = require('distube')
const queue = new Map();
// queue(message.guild.id, queue_constructor object { voice channel, text channel, connection, song[]);

module.exports = {
    name: 'play',
    aliases: ['skip', 'stop', 'p', 'sk', 's', 'loop'],
    cooldown: 0,
    description: 'Joins and plays a video from youtube',
    async execute(client, message, args, cmd, Discord) {
        const voice_channel = message.member.voice.channel;
        if (!voice_channel){
            const embed = new Discord.MessageEmbed()
            .setDescription('You have to be in a channel to start a song!')
            .setColor(`#c21000`)
            return message.channel.send(embed);
        } 
        const permissions = voice_channel.permissionsFor(message.client.user);
        if (!permissions.has('CONNECT')){
            const embed = new Discord.MessageEmbed()
            .setDescription('You dont have the right perms!')
            .setColor(`#c21000`)
            return message.channel.send(embed);
        }
        if (!permissions.has('SPEAK')){
            const embed = new Discord.MessageEmbed()
            .setDescription('You dont have the right perms!')
            .setColor(`#c21000`)
            return message.channel.send(embed);
        }

        const music = args.join(" ")
        if(!music) return message.reply(new MessageEmbed().setDescription(`Send a song to play!`).setColor("RED"))

        await client.distube.play(message, music)
    }
}


        
        /*
        const server_queue = queue.get(message.guild.id);

        if (cmd === 'play' || cmd === 'p') {

            if (!args.length){
                const embed = new Discord.MessageEmbed()
            .setTitle('Music')
            .setDescription('Send the second argument!')
            .setColor(`#c21000`)
            return message.channel.send(embed);
            }
            let song = {};

            //Valdiate Video URL. Then, if video found then create a song.
            if (ytdl.validateURL(args[0])) {
                const song_info = await ytdl.getInfo(args[0]);

                song = { title: song_info.videoDetails.title, url: song_info.videoDetails.video_url }

            }
            else {
                //If the video is not a URL then use keywords to find that video.
                const videoFinder = async (query) => {
                    const videoResult = await ytSearch(query);
                    return (videoResult.videos.length > 1) ? videoResult.videos[0] : null;
                }

                const video = await videoFinder(args.join(' '));

                //If video found, then, create a song.
                if (video) {

                    song = { title: video.title, url: video.url }

                }
                else {

                    const embed = new Discord.MessageEmbed()
                    .setTitle('Music')
                    .setDescription('No videos found for that search term')
                    .setColor(`#c21000`)
                    return message.channel.send(embed);
                }
            }

            //If queue doesn't have a guild.id key (aka server_queue) let create a queue constructor.
            if (!server_queue) {

                const queue_constructor =
                {
                    voice_channel: voice_channel,
                    text_channel: message.channel,
                    connection: null,
                    songs: []
                }

                queue.set(message.guild.id, queue_constructor);
                queue_constructor.songs.push(song);

                try {

                    const connection = await voice_channel.join();
                    queue_constructor.connection = connection;
                    video_player(message.guild, queue_constructor.songs[0]);

                }
                catch (err) {

                    queue.delete(message.guild.id);
                    const embed = new Discord.MessageEmbed()
                    .setTitle('Music')
                    .setDescription('Error Connecting to channel')
                    .setColor(`#c21000`)
                    return message.channel.send(embed)
                    throw err;
                }

            }
            else {

                server_queue.songs.push(song);
                const embed = new Discord.MessageEmbed()
                    .setTitle('Music')
                    .setDescription(`👍 **${song.title}** added to queue!`)
                    .setColor(`#c21000`)
                return message.channel.send(embed);
            }
        }

        else if(cmd === 'skip' || cmd === 'sk') skip_song(message, server_queue);
        else if(cmd === 'stop' || cmd === 's') stop_song(message, server_queue);
    }
}

const video_player = async (guild, song) => {
    const song_queue = queue.get(guild.id);

    if (!song) {
        song_queue.voice_channel.leave();
        queue.delete(guild.id);
        return;
    }

    const stream = ytdl(song.url, { filter: 'audioonly' });
    song_queue.connection.play(stream, { seek: 0, volume: 0.5 })
        .on('finish', () => {
            song_queue.songs.shift()
            video_player(guild, song_queue.songs[0]);
        });
    
        const embed = new Discord.MessageEmbed()
        .setTitle('Music')
        .setDescription(`🎶 Now playing **${song.title}**`)
        .setColor(`#c21000`)
    await song_queue.text_channel.send(embed);
}


const skip_song = (message, server_queue) => {
    if (!message.member.voice.channel){
        const embed = new Discord.MessageEmbed()
        .setTitle('Music')
        .setDescription('You need to be in a channel to execute this command!')
        .setColor(`#c21000`)
        return message.channel.send(embed);
    } 
    if(!server_queue){
        const embed = new Discord.MessageEmbed()
        .setTitle('Music')
        .setDescription(`There are no songs in queue 😔`)
        .setColor(`#c21000`)
        return message.channel.send(embed);
    } 
    server_queue.connection.dispatcher.end();
}

const stop_song = (message, server_queue) => {
    if (!message.member.voice.channel){
        const embed = new Discord.MessageEmbed()
        .setTitle('Music')
        .setDescription('You need to be in a channel to execute this command!')
        .setColor(`#c21000`)
        return message.channel.send(embed);
    } 
    server_queue.songs = [];
    server_queue.connection.dispatcher.end();
    
}
*/