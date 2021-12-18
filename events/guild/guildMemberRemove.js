const { MessageEmbed } = require('discord.js')

const serversettings = require('../../models/serversettings')
module.exports = async (client, Discord, member) => {
  const ss = await serversettings.findOne({ serverID: member.guild.id })
  const embed = new MessageEmbed()
  .setDescription(`<@${member.id}> left the server`)
  .setColor(`${ss.welcomecolor}`)
  member.guild.channels.cache.get(`${ss.modLog}`).send(embed)
};