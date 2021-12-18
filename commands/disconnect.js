module.exports = {
    name: "disconnect",
    async execute(client, message, args, cmd, Discord){
            if(message.guild.voiceConnection) {
                message.guild.voiceConnection.disconnect()
            }
    }
}