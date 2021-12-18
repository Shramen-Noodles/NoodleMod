const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });
const mongoose = require('mongoose');
const api = require('random-stuff-api')
const got = require('got');
const memberCounter = require('./counters/member-counter')
const rroles = require('./features/rr')
const ms = require(`ms`)
const { GivewayCreator, GiveawayCreator } = require('discord-giveaway')
const Creator = new GiveawayCreator(client, "MONGODB_SRV = mongodb+srv://DiscordBot:1234@discordbot.gboc9.mongodb.net/ShramenModDB?retryWrites=true&w=majority 
");
const Levels = require("discord-xp");
Levels.setURL('MONGODB_SRV = mongodb+srv://DiscordBot:1234@discordbot.gboc9.mongodb.net/ShramenModDB?retryWrites=true&w=majority 
'); // You only need to do this ONCE per process.
const { DiscordAPIError, MessageEmbed, Message, } = require("discord.js");
const bk = require('./models/bonks');
const { link } = require('ffmpeg-static');
const mute = require('./models/mute');
const { statSync } = require('fs');
const { SSL_OP_ALL } = require('constants');
const serversettings = require('./models/serversettings')
const distube = require('distube');
const message = require('./events/guild/message');
const discordTTS = require('discord-tts')
client.distube = new distube(client, { searchSongs: false, emitNewSongOnly: true})
client.distube
    .on('playSong', (message, queue, song) => message.channel.send(new Discord.MessageEmbed().setDescription(`Playing \`${song.name}\` - ${song.formattedDuration}`)))
    .on('addSong', (message, queue, song) => message.channel.send(new Discord.MessageEmbed().setDescription(`Added \`${song.name}\` - ${song.formattedDuration} to the queue`)))
    .on('playList', (message, queue, playlist, song) => message.channel.send(new Discord.MessageEmbed().setDescription(`Play \`${playlist.name}\` (${playlist.songs.length} songs)`)))
    .on('addList', (message, queue, playlist) => message.channel.send(new Discord.MessageEmbed().setDescription(`Added \`${playlist.name}\` (${playlist.songs.length} songs) to the queue`)))
    .on('searchCancel', (message) => message.channel.send('Search canceled.'))
    .on('error', (message, e) => {
        message.channel.send(`An error occured! ${e}`)
        console.log(e)
    })


 
client.once('ready', () => {

    const statuses =  [
        `${client.guilds.cache.size} servers (POG)`,
        `Ping Me For Help!`
    ]

    let index = 0
    setInterval(() => {
        if(index === statuses.length) index = 0;
        const status = statuses[index]
        client.user.setActivity(status, { type: "WATCHING"}).catch(console.error)
        index++;

    }, 30000)

    memberCounter(client)
    rroles(client)
});



//COMMAND HANDLER

client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.giveaways = Creator;

['command_handler', 'event_handler'].forEach(handler => {
    require(`./handlers/${handler}`)(client, Discord);
})


//ANTIAD


client.on("message", async (message) => {
    
    const ss = await serversettings.findOne({ serverID: message.guild.id })
    if(ss.levels === "off") return;
    if(message.channel.id == ss.tts || message.channel.id === "808703868014821396" || message.channel.id == ss.levelignore1 || message.channel.id == ss.levelignore2 || message.channel.id == ss.levelignore3 || message.channel.id == ss.levelignore4 || message.channel.id == ss.levelignore5 || message.channel.id == ss.levelignore6 || message.channel.id == ss.levelignore7 || message.channel.id == ss.levelignore8 || message.channel.id == ss.levelignore10) return;
    if (!message.guild) return;
    if (message.author.bot) return;
    
    
    const randomAmountOfXp = Math.floor(Math.random() * 10) + 1; // Min 1, Max 30
    const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomAmountOfXp);
    const usr = await Levels.fetch(message.author.id, message.guild.id)
    if(ss.levelup || ss.levelup > 1){
        if (hasLeveledUp) {
            const user = await Levels.fetch(message.author.id, message.guild.id);
            message.guild.channels.cache.get(`${ss.levelup}`).send(`${message.author}, congratulations! You have leveled up to **${user.level}**!`)
            if(user.level == ss.lrole1level){
            message.member.roles.add(`${ss.levelrole1}`)
            } else if(user.level == ss.lrole2level){
                message.member.roles.add(`${ss.levelrole2}`)
            }else if(user.level == ss.lrole3level){
                message.member.roles.add(`${ss.levelrole3}`)
            }else if(user.level == ss.lrole4level){
                message.member.roles.add(`${ss.levelrole4}`)
            }else if(user.level == ss.lrole5level){
                message.member.roles.add(`${ss.levelrole5}`)
            }
            
          }
          
    } else{
        if (hasLeveledUp) {
            const user = await Levels.fetch(message.author.id, message.guild.id);
            message.channel.send(`${message.author}, congratulations! You have leveled up to **${user.level}**!`);
            if(user.level == ss.lrole1level){
                message.member.roles.add(`${ss.levelrole1}`)
                } else if(user.level == ss.lrole2level){
                    message.member.roles.add(`${ss.levelrole2}`)
                }else if(user.level == ss.lrole3level){
                    message.member.roles.add(`${ss.levelrole3}`)
                }else if(user.level == ss.lrole4level){
                    message.member.roles.add(`${ss.levelrole4}`)
                }else if(user.level == ss.lrole5level){
                    message.member.roles.add(`${ss.levelrole5}`)
                }
          }
    }

    
  });





//MONGODB CONNECTION
mongoose.connect(process.env.MONGODB_SRV, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}).then(() => {
    console.log('Connected to the database!')
}).catch((err) => {
    console.log(err);
})

//LOGIN
client.login(process.env.TOKEN);
