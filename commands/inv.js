const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "inventory",
    aliases: ["inv"],
    permissions: [],
    cooldown: 5,
    description: "Check the user balance",
    execute(client, message, args, cmd, Discord, profileData){
        const embed = new MessageEmbed()
        .setColor(`#c21000`)
        .setTitle(`${message.author.username}'s Inventory`)
        .addFields(
            {name: 'Fish', value: `>>> 🐟 ${profileData.fish.toLocaleString()} Fish (id: fish)`},
            {name: 'Cookies ', value: `>>> 🍪 ${profileData.cookies.toLocaleString()} Cookies (id: cookie)`},
            {name: 'Utilies:', value: `>>> 🎣 ${profileData.rod} Rods (id: rod),  🍳 ${profileData.stove} Stove. (id: stove)`},
            //{name: `Stove:`, value: `>>> 🍳 ${profileData.stove} Stove.`},
            {name: '`Security:`', value: `>>> 🔒 ${profileData.security} Securities`},
            {name: '`Tech:`', value: `>>> 💻 ${profileData.laptop} Laptops (id: laptop),  🖥️ ${profileData.pc} Gaming PC (id: pc), 📱 ${profileData.phone} phones (id: phone)`},
            {name: '`Art:`', value: `>>> 🎨 ${profileData.art.toLocaleString()} Supplies,  🎨 ${profileData.projects.toLocaleString()} Projects (id: art)`},
            //{name: `Art Project:`, value: `>>> 🎨 ${profileData.projects} Art Projects`},
            //{name: `Gaming PC:`, value: `>>> 🖥️ ${profileData.pc} Gaming PC`},
            {name: '`Collectibles:`', value: `>>> 🍉 ${profileData.melon.toLocaleString()} Melons`},
            {name: '`Boosts/Powerups:`', value: `>>> 🍪 ${profileData.cookieboost.toLocaleString()} Cookie Boosts, 🐟 ${profileData.fishboost.toLocaleString()} Fish Boosts, 💰 ${profileData.begboost} Beg Boosts`},
        )
        .setFooter(`RSP = Ramen Spice Packets. Anything you cant sell will not have an ID.`)
      message.channel.send(embed);
    },
  };