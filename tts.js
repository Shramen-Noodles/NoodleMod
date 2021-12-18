const { statSync } = require("fs");
const serversettings = require('./models/serversettings')
const server_queue = queue.get(message.guild.id);
module.exports = async (client, message, args, Discord, discordTTS) =>{
    
      const ss = serversettings.findOne({ serverID: message.guild.id })
            if (!args.length){
                return 
            }
            let song
            if(message.content.length > 0 ){
                song = message.content
            }

            

            //If queue doesn't have a guild.id key (aka server_queue) let create a queue constructor.
            if (!server_queue) {

                const queue_constructor =
                {
                    voice_channel: voice_channel,
                    text_channel: ss.tts,
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

 
