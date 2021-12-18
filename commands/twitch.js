module.exports = {
    name: 'twitch',
    description: "sends twitch link",
    execute(client, message, args, cmd, Discord){
        const newEmbed1 = new Discord.MessageEmbed()
        .setColor('#c21000')
        .setTitle('Twitch')
        .setURL('https://www.twitch.tv/shramennoodles')
        .setDescription('Twitch Link and Desc')
        .addFields(
            {name: 'Link', value: 'https://www.twitch.tv/shramennoodles'},
            {name: 'Description', value: 'Shramen Noodles is a live streamer on twitch and usually goes live every weekend bringing you Minecraft streams of Hypixel or Hinscraft!'}

        )
        .setImage('https://media.discordapp.net/attachments/793258563350822932/796456953462652948/Untitled_69.png?width=1440&height=270')
        .setFooter('Make sure to check out the socials command to see all the links!');

        message.channel.send(newEmbed1);
    }
}