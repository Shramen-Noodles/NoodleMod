module.exports = {
    name: 'notifyadd',
    description: "run this command to join the notification squad role",
    execute(client, message, args, cmd, Discord){

        if(message.member.roles.cache.has('741363574244376667')){
            message.channel.send('You already have this role. Run notifyleave to remove the role');
        } else  {
            message.member.roles.add('741363574244376667');
            message.channel.send('You have been added to the Notification Squad role!');
        }
        
    }
}