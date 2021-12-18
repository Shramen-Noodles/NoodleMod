const { Discord, DiscordAPIError, MessageEmbed } = require("discord.js");
const profileModel = require("../../models/profileSchema");
const serversettings = require('../../models/serversettings')
module.exports = async (client, Discord, member) => {
  const ss = await serversettings.findOne({ serverID: member.guild.id })
  const embed = new MessageEmbed()
  .setColor(`${ss.welcomecolor}`)
  .setDescription(`Welcome <@${member.user.id}> to ***${member.guild.name}***!`)
  .setFooter(`Member # ${member.guild.memberCount}`)
  member.guild.channels.cache.get(`${ss.welcomechannel}`).send(embed)

  member.roles.add(`${ss.autorole1}`)
  member.roles.add(`${ss.autorole2}`)
  member.roles.add(`${ss.autorole3}`)
  member.roles.add(`${ss.autorole4}`)
  member.roles.add(`${ss.autorole5}`)
  member.roles.add(`${ss.autorole6}`)
  member.roles.add(`${ss.autorole7}`)
  member.roles.add(`${ss.autorole8}`)
  member.roles.add(`${ss.autorole9}`)
  member.roles.add(`${ss.autorole10}`)
  member.roles.add(ss.aroles)


  const profileData = await profileModel.findOne({ userID: member.id }) 
  if(profileData) return;
  let profile = await profileModel.create({
    userID: member.id,
    serverID: member.guild.id,
    coins: 1000,
    bank: 0,
  });
  profile.save();
};