const serversettings = require('../models/serversettings')
const Levels = require('discord-xp')
module.exports = {
    name: "leaderboard",
    aliases: ["lb"],
    async execute(client, message, args, cmd, Discord){
    const ss = await serversettings.findOne({ serverID: message.guild.id })
        if(ss.levels === "off") return message.channel.send('Levelling is disabled for this server')
        
    const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 10); // We grab top 10 users with most xp in the current server.

    if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");

    const leaderboard = await Levels.computeLeaderboard(client, rawLeaderboard, true); // We process the leaderboard.

    const lb = leaderboard.map(e => `**${e.position}. ${e.username}**\n*Level: ${e.level}* - XP: ${e.xp.toLocaleString()}`); // We map the outputs.

    message.channel.send(new Discord.MessageEmbed().setTitle(`${message.guild.name}'s leaderboard:`).setDescription(`${lb.join("\n\n")}`).setColor(`${ss.welcomecolor}`));
    }
}
