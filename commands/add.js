const serverSettings = require("../models/serversettings");

module.exports = {
    name: "add",
    async execute(client, message, args, cmd, Discord){
      if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You must have `MANAGE MESSAGES` to run this command!')
        const setting = args[0]
        if(!args[0]) return message.channel.send('Run the help command to see what you can set!');
    }
}