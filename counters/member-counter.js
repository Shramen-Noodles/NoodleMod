module.exports = async (client) =>{
    const guild = client.guilds.cache.get('724324324793909438');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('808698665082290267');
        channel.setName(`Total Members: ${memberCount.toLocaleString()}`);
    }, 5000);

    console.log('counting members')
}
 