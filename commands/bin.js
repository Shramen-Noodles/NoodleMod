module.exports = {
    name: 'bin',
    description: "sends youtube link",
    execute(client, message, args, cmd, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#c21000')
        .setTitle('Code Sharers')
        .setDescription('Please use these to share code, or use discord code blocks')
        .addFields(
            {name: 'Source Bin', value: 'https://sourceb.in'},
            {name: 'Paste Bin', value: 'https://pastebin.com'}

        )

        message.channel.send(newEmbed);
    }
}