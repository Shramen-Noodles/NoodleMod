
const profileModel = require("../../models/profileSchema"); 
const { MessageEmbed } = require('discord.js')
const cooldowns = new Map();
const db = require('../../models/warns'); 
const bk = require('../../models/bonks')
const serverSettings = require('../../models/serversettings')
const discordTTS = require('discord-tts');
const muteslol = require("../../models/mute");
const distube = require('distube')
module.exports = async (Discord, client, message) => {
  const setting = await serverSettings.findOne({  serverID: message.guild.id})
  
    let profileData;
    try {
    profileData = await profileModel.findOne({ userID: message.author.id });
    if(!profileData){
      let profile = await profileModel.create({
        userID: message.author.id,
        serverID: message.guild.id,
        coins: 1000,
        bank: 0,
      });
      profile.save();
    }
    } catch (err) {
    console.log(err);
    }


    let bonksters;
    try {
    bonksters = await profileModel.findOne({ userID: message.author.id });
    if(!bonksters){
      let profile = await profileModel.create({
        userID: message.author.id,
        serverID: message.guild.id,
        bonks: 0
      });
      profile.save();
    console.log(`database created for ${message.author.username}`)
    }
    } catch (err) {
    console.log(err);
    }

    let mutedb;
    try {
    mutedb = await muteslol.findOne({ serverID: message.guild.id, userID: message.author.id });
    if(!mutedb){
      let profile = await muteslol.create({
        userID: message.author.id,
        serverID: message.guild.id,
        mutes: 0
      });
      profile.save();
    console.log(`database created for ${message.author.username}`)
    }
    } catch (err) {
    console.log(err);
    }

    if(message.channel.type === "dm") return;
    let serversetting;
    try {
    serversetting = await serverSettings.findOne({ serverID: message.guild.id });
    if(!serversetting){
      let profile = await serverSettings.create({
        serverID: message.guild.id,
        servername: message.guild.name,
      });
      profile.save();
    console.log(`database created for ${message.guild.id} aka ${message.guild.name}`)
    }
    } catch (err) {
    console.log(err);
    }
    
    if(profileData.job === "doctor"){
        await profileModel.findOneAndUpdate(
            {
                userID: message.guild.id,
            },
            {
                doctor: "yes"
            }
        )
    }

    message.guild.me.voice.setSelfDeaf(true) 
    const ss = await serverSettings.findOne({ serverID: message.guild.id })
    const prefix = `${ss.prefix}`;
    if(!message.content.startsWith(prefix) || message.author.bot){
      if(message.author.bot) return
    if (message.content.includes("@here") || message.content.includes("@everyone")) return;
    if (message.mentions.has(client.user.id)) {
        message.channel.send(new MessageEmbed().setDescription(`Hello there! My prefix for this  server is: \`${setting.prefix}\`. Do -help to see a list of all commands!`).setColor('RED'));
    };
  if(message.channel.id === `${ss.tts}`){
        if(message.author.bot) return;
        if(message.content.length > 200) return message.channel.send('Yo so... cant go over 200 characters')
        if(message.author.bot) return;
        const vc =  message.member.voice.channelID
        const channel = client.channels.cache.get(vc)
         if(!channel) return 
         const content = message.content
         if(!content) return 
         const songqueue = client.distube.getQueue(message)
         if(songqueue){
            const msssg = await message.channel.send('You cannot do TTS while a song is playing, please try again later!')
            msssg.delete({ timeout: 1321 })
         }
         const broadcast = client.voice.createBroadcast()

        channel.join().then(async connection => {
            broadcast.play(discordTTS.getVoiceStream(content))
            const dispatcher = await connection.play(broadcast)
            setTimeout(function () {
                channel.leave()
                //e
            }, 240000);
            
            
        })
      
  }
  if(message.content.toLowerCase().includes('class')){
      return
  }
  if(message.content.toLowerCase().includes('glass')){
      return
  }
  if(message.content.toLowerCase().includes('assistance')){
      return
  }
  if(message.content.toLowerCase().includes('assuming')){
      return
  }
  if(message.content.toLowerCase().includes('assum')){
      return
  }
  if(message.content.toLowerCase().includes('grass')){
    return
}
  if(message.content.toLowerCase().includes('vague')){
      return
  }
  if(message.content.toLowerCase().includes('assumption')){
      return
  }
  if(message.content.toLowerCase().includes('brass')){
      return
  }
  if(message.content.toLowerCase().includes('pass')){
      return
  }
  
  if (message.content.toLowerCase().includes('779503344007905302/821429986036547624/video0.mp4')){
      message.delete({ timeout: 2})
  }
  if (message.content.toLowerCase().includes('cumpleaños')){
      return
  } 
  if (message.content.toLowerCase().includes('cumpleanos')){
      return
  }
  if (message.content.toLowerCase().includes('mass')){
      return
  }
  if (message.content.toLowerCase().includes('document')){
      return
  }
  if (message.content.toLowerCase().includes('shitake')){
    return
}
if (message.content.toLowerCase().includes('shitzu')){
    return
}

  if(ss.f === "on"){
    if(message.author.bot) return;
  if(message.content === "f"){
      message.channel.send('F');
  }else if(message.content === "F"){
      message.channel.send('F');
  } 
  }
  

  if(ss.blacklist === "off") return
  if(message.channel.nsfw) return;
  const animlist = [
      "pussy",
      "cock"
  ]

  const blacklist = [
      "fuck",
      "bitch",
      "dick",
      "testes",
      "testicle",
      "penis",
      "slut",
      "whore",
      "titties",
      "tiddies",
      "niggar",
      "nibba",
      "nigga",
      "nigger",
      "testtest",
      "have sex",
      "niggas",
      "thong",
      "Bitches",
      "fag",
      "faggot",
      "vagina",
      "vag",
      "cum",
      "semen",
      "jizz",
      "shit",
      "boobs",
      "boobies",
      "anal",
      "cunt",
      "douche",
      "erect",
      "negro",
      "orgasm",
      "orgy",
      "porn",
      "porno",
      "pornography",
      "bussy",
      "fock",
      "cuck",
      "creampie",
      "cumming",
      "coom",
      "coon",
      "horribleword",
      "cooom",
      "shit",
      `ball itch`,
      `balls itch`,
      "peen",
      "penjs"

  ]

  let confirm = false;
  var i;

      if (message.channel.id == '807359433965305876') return;
      if (message.channel.id == '807359866401194044') return;
      if (message.channel.id == '807359881601351780') return;
      if (message.channel.id == '807359935993085972') return;
  
  
  for (i = 0; i < blacklist.length; i++) {
      if (message.content.toLowerCase().includes(blacklist[i].toLowerCase()))
          confirm = true;
  }
  if (confirm) {
      message.delete({ timeout: 0 })
      const user = message.author
      const content = message.content

      if(message.author.bot){
          api.random.insult().then(insult => {
              message.channel.send(insult)
             })
          return
      } else {
          bk.findOne({ guildid: message.guild.id, user: user.id}, async(err, data) => {
              if(err) throw err;
              if(!data) {
                  data = new bk({
                      guildid: message.guild.id,
                      user : user.id,
                      content : [
                          {
                              content : content
                          }
                      ]
                  })
              } else {
                  const obj = {
                      content : content
                  }
                  data.content.push(obj)
              }
              data.save()
          });
          user.send(new MessageEmbed()
              .setDescription(`You have been bonked! Watch your mouth!`)
              .setColor("RED")
          )
          message.guild.channels.cache.get(`${setting.blacklistlog}`).send(new MessageEmbed().setDescription(`<@${message.author.id}> sent **${message.content}** in <#${message.channel.id}>`)
          )
          message.channel.send(new MessageEmbed().setDescription(`<:BONK:817038424165974056> B O N K. Ur message has been deleted. Dont say that!`).setColor('RED')
          )
      }
  }
  
  

    } else{
      const args = message.content.slice(prefix.length).split(/ +/g);
    const cmd = args.shift().toLowerCase();

    const command = client.commands.get(cmd) || client.commands.find(a => a.aliases && a.aliases.includes(cmd));

    if(!cooldowns.has(command.name)){
        cooldowns.set(command.name, new Discord.Collection());
    }

    const current_time = Date.now();
    const time_stamps = cooldowns.get(command.name)
    const cooldown_amount = (command.cooldown) * 1000;
  
    if(time_stamps.has(message.author.id)){
        const expiration_time = time_stamps.get(message.author.id) + cooldown_amount;

        if(current_time < expiration_time){
            const time_left = (expiration_time - current_time) / 1000;

            const embed = new MessageEmbed()
            .setColor(`#c21000`)
            .setDescription(`>>> Please wait ${time_left.toFixed(1)} more seconds before using ${command.name}`)
            const msg = await message.channel.send(embed)
            
            const time__left = time_left.toFixed(1) * 1000
            msg.delete({ timeout: time__left })
            message.delete({ timeout: time__left })
            return


          
        }
    }

        time_stamps.set(message.author.id, current_time)
         setTimeout(() => time_stamps.delete(message.author.id), cooldown_amount);

         try{
          command.execute(client, message, args, cmd, Discord, profileData);
      } catch (err){
          message.reply("Sorry, there was an error when trying to execute that command");
      }
  
    }
  
    
    
}