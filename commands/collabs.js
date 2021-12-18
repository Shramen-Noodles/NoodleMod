module.exports = {
    name: "collabs",
    async execute(client, message, args, cmd, Discord){
        const cembed = new Discord.MessageEmbed()
        .setTitle(`Shramens Collab Queue`)
        .setDescription(`SUBYT, Rekx_z, ItzLB`)
        message.channel.send(cembed)
    }

}