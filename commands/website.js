module.exports = {
    name: 'website',
    description: "sends website link",
    execute(client, message, args, cmd, Discord){
        const newEmbed1 = new Discord.MessageEmbed()
        .setColor('#c21000')
        .setTitle('Website')
        .setURL('https://shramen.webador.com/')
        .setDescription('The Shramen Website')
        .addFields(
            {name: 'Link', value: 'https://shramen.webador.com/'},
            {name: 'Description', value: 'Shramen has a website with his recipes, videos, socials, and a lot more. Here you can find everything that is officially Shramen!'}

        )
        .setImage('https://media.discordapp.net/attachments/793258563350822932/796884931627712572/Untitled_16.jpg?width=1440&height=270')
        .setFooter('Make sure to check out the socials command to see all the links!');

        message.channel.send(newEmbed1);
    }
}