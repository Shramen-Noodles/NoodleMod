
const Discord = require('discord.js')
const { MessageEmbed } = require('discord.js')
const serversettings = require('../models/serversettings')
module.exports = {
    name: 'help',
    aliases: [`help music`, `help socials`, `help mod`, `help moderation`, `help reddit`, `help fun`, `help econ`, `help economy`],
    description: "displays a list of all commands",
    async execute(client, message, args, cmd, Discord){
        var catgr = args[0]
        const ss = await serversettings.findOne({ serverID: message.guild.id })
        

        if(!catgr){
            return message.channel.send(new MessageEmbed()
            .setDescription('Specify a category')
            .addFields(
                {name: 'Music', value: `${ss.prefix}help music: Displays the music commands`},
                {name: 'Mod', value: `${ss.prefix}help mod: Displays the moderator only commands (requires manage messages permission)`},
                {name: "Fun", value: `${ss.prefix}help fun: Displays fun/entertainment commands`},
                {name: "Economy", value: `${ss.prefix}help economy: Displays the economy commands`},
                {name: "Config", value: `${ss.prefix}help config: Displays the server configuration commands`},
                {name: "Leveling", value: `${ss.prefix}help leveling: Displays the leveling commands`},
            )
            .setColor('#c21000')
            .setFooter(`${ss.prefix}help <category> to display commands for that category!`)
            )
        }
        
        var category = catgr.toLowerCase()

        if(category === "music"){
            message.channel.send(new MessageEmbed()
            .setDescription('Music Commands')
            .addFields(
                {name: `${ss.prefix}play (song name)`, value: '```Connects the bot to your channel and plays a song from YouTube or adds the song to the current queue```'},
                {name: `${ss.prefix}skip`, value: '```Skips the current song and moves to the next or disconnects bot if it is last song```'},
                {name: `${ss.prefix}stop`, value: '```Removes the bot from your channel```'},
                {name: `${ss.prefix}queue`, value: '```Displays the music queue```'},
            )
            .setColor('#c21000')
            )
        }

        if(category === "socials"){
            message.channel.send(new MessageEmbed()
            .setDescription('Socials Commands')
            .addFields(
                {name: `${ss.prefix}youtube`, value: '```Displays YouTube URL```'},
                {name: `${ss.prefix}twitch`, value: '```Displays Twitch URL```'},
                {name: `${ss.prefix}website`, value: '```Displays Website URL```'},
            )
            .setColor('#c21000')
            )
        }

        if(category === "leveling"){
            message.channel.send(new MessageEmbed()
            .setDescription('Leveling Commands')
            .addFields(
                {name: `${ss.prefix}level`, value: '```Displays your level```'},
                {name: `${ss.prefix}lb, leaderboard`, value: '```Displays server leaderboard```'},
                {name: `${ss.prefix}setlevel @user <level>`, value: '```Sets users level to specified level```'},
            )
            .setFooter('MAKE SURE TO CHECK THE CONFIG COMMANDS TO SET IT UP')
            .setColor('#c21000')
            )
        }

        if(category === "mod"){
            message.channel.send(new MessageEmbed()
            .setDescription('Moderation Commands')
            .addFields(
                {name: `${ss.prefix}giveaway #channel duration NumOfWinners (prize)`, value: '```Starts a giveaway!```'},
                {name: `${ss.prefix}mute @user [time]`, value: '```Mutes a user for the specified amount of time. Do not include the time argument to mute them until unmuted```'},
                {name: `${ss.prefix}unmute @user`, value: '```Unmutes a user```'},
                {name: `${ss.prefix}warn @user (reason)`, value: '```Warns a user for the provided reason```'},
                {name:` ${ss.prefix}rwarn @user`, value: '```Removes a users latest warning```'},
                {name: `${ss.prefix}clearwarnings @user`, value: '```removes all of a users warnings```'},
                {name: `${ss.prefix}warns @user`, value: '```Displays a users warnings```'},
                {name: `${ss.prefix}bonks @user`, value: '```Displays a users bonks```'},
                {name: `${ss.prefix}kick @user`, value: '```kicks a user```'},
                {name: `${ss.prefix}ban @user`, value: '```Bans a user```'},
            )
            .setColor('#c21000')
            .setFooter('Check the config section for further details')
            )
        }

        if(category === "fun"){
            message.channel.send(new MessageEmbed()
            .setDescription('Fun Commands')
            .addFields(
                {name: `${ss.prefix}meme`, value: '```Sends a random meme from r/dankmemes```'},
                {name:` ${ss.prefix}hmeme, -hc`, value: '```Sends a random meme from r/hermitcraftmemes```'},
                {name: `${ss.prefix}cute`, value: '```Sends a random picture from r/aww```'},
                {name: `${ss.prefix}joke`, value: '```Sends a random dad joke```'},
                {name: `${ss.prefix}insult`, value: '```Sends a random insult```'},
                {name: `Other Animals`, value: '```you can also do rabbit, dog, or cat for other animals.```'},
                {name:`${ss.prefix}villager`, value: '```its useless```'},
                {name: `${ss.prefix}ping`, value: '```responds with pong```'},
                {name: `${ss.prefix}ytsearch (video)`, value: '```Searches YouTube for a video and posts the link in the channel```'},
            )
            .setColor('#c21000')
            )
        }

        if(category === "economy"){
            message.channel.send(new MessageEmbed()
            .setDescription('Economy Commands')
            .addFields(
                {name: `${ss.prefix}beg'`, value: '```Gives you a random amount of coins```'},
                {name: `${ss.prefix}dep #`, value: '```Deposits said number of coins in your bank```'},
                {name: `${ss.prefix}with #`, value: '```Withdraws said number of coins from your bank```'},
                {name: `${ss.prefix}inv`, value: '```Shows your inventory```'},
                {name: `${ss.prefix}fish`, value: '```Go fishing!```'},
                {name: `${ss.prefix}sell (item) *#*`, value: '```Sell items for coins```'},
                {name: `${ss.prefix}buy (item)`, value: '```Buy items```'},
                {name: `${ss.prefix}shop, -shop 2`, value: '```Displays all the items for sale```'},
                {name: `${ss.prefix}bake`, value: '```Bake a random number of cookies```'},
                {name: `${ss.prefix}share @user #`, value: '```Share a certain number of coins with a user```'},
                {name: `${ss.prefix}rob @user`, value: '```Rob a user! Be warned, if they have security you will be fined a hefty amount!```'},
                {name: `${ss.prefix}craft`, value: '```Make an art project that can be sold on etsy```'},
                {name: `${ss.prefix}jobs`, value: '```See the list of jobs```'},
                {name: `${ss.prefix}work`, value: '```Do your job!```'},
                {name: `${ss.prefix}join (job) ${ss.prefix}quit`, value: '```Get a job or quit a job```'},
                {name: `${ss.prefix}coinflip (prediction) (wager)`, value: '```Wager a certain amount of money on a coinflip!```'},
                {name: `${ss.prefix}postmeme`, value: '```Post a meme online and get a certain amount of money in return!```'},
            )
            .setColor('#c21000')
            .setFooter('You can buy security too!')
            )
        }

        if(category === "config"){
            message.channel.send(new MessageEmbed()
            .setDescription('Config Commands')
            .addFields(
                {name: `${ss.prefix}set appchannel #channel`, value: '```Sets the mentioned channel as the application log for applications, suggestions, and reports```'},
                {name: `${ss.prefix}set blacklist on/off`, value: '```Turns blacklist on or off```'},
                {name: `${ss.prefix}set modlog #channel`, value: '```Sets the mentioned channel as the modlog channel```'},
                {name: `${ss.prefix}set welcomechannel #channel`, value: '```Sets the mentioned channel as the welcome channel```'},
                {name: `${ss.prefix}set welcomecolor <#colorcode>`, value:'```Sets the mentioned color as the welcome message color```'},
                {name: `${ss.prefix}set autorole(Num1-10) @role/none`, value: '```None removes the autorole. Sets the mentioned role as the 1st-10th autorole depending if you did autorole1, autorole2, etc```'},
                {name: `${ss.prefix}set blacklistlog #channel`, value: '```Sets the mentioned channel as the blacklist log channel```'},
                {name: `${ss.prefix}set muterole @role`, value: '```Sets the mentioned role as the mute role```'},
                {name: `${ss.prefix}set prefix <newprefix>`, value: '```Sets the mentioned prefix as the new prefix```'},
                {name: `${ss.prefix}set levelignore(Num1-5) #channel`, value: '```none as the channel removes the channel. Sets the mentioned channel as the 1st-5th level role depending if you did levelignore1, levelignore2, etc```'},
                {name: `${ss.prefix}set levels on/off`, value: '```Turns leveling on or off```'},
                {name: `${ss.prefix}set f on/off`, value: '```Turns the respond with f on or off```'},
                {name: `${ss.prefix}set levelup #channel`, value: '```none as the channel removes the channel. If no levelup channel is specified levelups will be sent in the message channel. Sets the levelup announcement channel.```'},
                {name: `${ss.prefix}set levelrole(Num1-5) <required level> @role`, value: '```Set a role reward for the specified level```'},
                {name: `${ss.prefix}set tts #channel`, value: '```Set a channel (usually called voice-reply or tts) for the tts```'},
            )
            .setColor('#c21000')
            )
        }
        
        
        
        //const embed = new MessageEmbed()
        //.setColor('#c21000')
        //.setTitle('Help')
        //.setDescription('Specify which category you need help with')
       // .addFields(
       //     {name: 'Music', value: '`-play (song name or URL): Adds a song to the queue | -skip: skips the song playing | -stop: stops the bot and removes it from your channel`'},
       ///     {name: 'Socials', value: '`-youtube: displays youtube URL | -twitch: Displays twitch URL | -website: Displays website URL`'},
      //      {name: 'Moderation', value: '`-giveaway #channel duration #ofWinners (prize) : Starts a giveaway! | -kick @member: kicks a member from the server | -ban @member: bans a member from the server | -mute @user [time]: mutes a user for a certain amount of time. if no time is specified, they will be muted until they are unmuted. | -unmute @user: unmutes a user | warn @user reason: warns a user | rwarn @user:removes users latest warn | clearwarnings @user: clears all of a users warnings | warns @user: displays all the warns a user has`'},
      //      {name: 'Reddit', value: '`-meme, -m: r/dankmemes ***[For this command, you can do -ffmon or -ffmoff to enable a family friendly filter]***| -hmeme, -hc, -hermitcraft, -hcmeme: r/hermitcraftmemes | -cute: r/Aww | For specific animals you can use: -rabbit -axolotl -dog -cat`'},
      //      {name: 'Fun!', value: '`-villager: just do it to find out rly. | -insult: random insults | -joke: random jokes | -ping: responds with p o n g`'},
      //      {name: 'Economy', value: '`-bal, -balance, -bl: displays your balance | -beg: begs for random amount of money | -dep: deposit a specific number into your bank | -with: withdraw a certain number from your bank`'},
      //      {name: 'Need different help? Contact Shramen', value: '`have fun with the bot!`'}
      //  )
    
        //.setFooter('More questions? Ask Shramen Noodles!');
//
        //message.channel.send(embed);
    }
}