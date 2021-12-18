module.exports = {
    name: 'youtube',
    description: "sends youtube link",
    execute(client, message, args, cmd, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#c21000')
        .setTitle('YouTube')
        .setURL('https://www.youtube.com/shramennoodles')
        .setDescription('```Shramen Noodles is a content creator on YouTube. He has many series such as a Minecraft Building, Minecraft Survival, Bedwars, and also Good Ol Recipes!```')
        .addFields(
            {name: 'Link', value: 'https://www.youtube.com/shramennoodles'},
            {name: 'Description', value: 'Shramen Noodles is a content creator on YouTube. He has many series such as a Minecraft Building, Minecraft Survival, Bedwars, and also Good Ol Recipes!'}

        )
        .setImage('https://media.discordapp.net/attachments/793258563350822932/796456950652731442/Untitled_70.png?width=1440&height=270')
        .setFooter('Make sure to check out the socials command to see all the links!');

        message.channel.send(newEmbed);
    }
}