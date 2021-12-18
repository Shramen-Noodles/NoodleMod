module.exports = {
    name: 'notifyleave',
    description: "run this command to leave the notification squad role",
    execute(client, message, args, cmd, Discord){


        if(message.member.roles.cache.has('741363574244376667')){
            message.member.roles.remove('741363574244376667').catch(console.error);
            message.channel.send('You have been removed from the Notifcation Squad role');
        } else  {
            message.channel.send('You are already off of that role. Run notifyadd to regain the role');
        }
        
    }
}