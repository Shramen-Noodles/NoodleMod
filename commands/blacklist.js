module.exports = {
    name: "blacklist",
    aliases: ["blk"],
    async execute(client, message, args, cmd, Discord){
        const embed = new Discord.MessageEmbed()
        .setDescription(`fuck, bitch, dick, testes, testicle, penis, (shramen's irl name), slut, whore, titties, tiddies, niggar, nibba, nigga, nigger, have sex, thong, bitches, fag, faggot, vagina, vag, cum, seme, jizz, shit, boobs, boobies, anal, cunt, douche, erect, negro, orgasm, orgy, porn, porno, pornography, bussy, fock, cuck, creampie, cumming, coom, coon, horribleword, cooom, ass, shit, ball itch, balls itch, peen, penjs`)
        .setFooter(`Use -bonks @user to see past blacklist | This message will last for 20 seconds before getting deleted`)
        message.delete({ timeout: 5000 })
        const msg = await message.channel.send(embed)
        msg.delete({ timeout: 20000 })
    }
}

/*
"shreemann",
        "fuck",
        "bitch",
        "dick",
        "testes",
        "testicle",
        "penis",
        "Shreemann",
        "SHREEMANN",
        "Zoe",
        "zoe",
        "slut",
        "whore",
        "titties",
        "tiddies",
        "niggar",
        "nibba",
        "nigga",
        "nigger",
        "testtest",
        "have sex",
        "niggas",
        "thong",
        "Bitches",
        "fag",
        "faggot",
        "vagina",
        "vag",
        "cum",
        "semen",
        "jizz",
        "shit",
        "boobs",
        "boobies",
        "anal",
        "cunt",
        "douche",
        "erect",
        "negro",
        "orgasm",
        "orgy",
        "porn",
        "porno",
        "pornography",
        "bussy",
        "fock",
        "cuck",
        "creampie",
        "cumming",
        "coom",
        "coon",
        "horribleword",
        "cooom",
        "ass",
        "shit",
        `ball itch`,
        `balls itch`,
        "peen",
        "penjs"

*/