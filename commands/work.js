const profileModel = require('../models/profileSchema')
const unscramblers = require('../streamerstuff.js')
module.exports = {
    name: "work",
    cooldown: 3600,
    async execute(client, message, args, cmd, Discord, profileData){
        var action = args[0]
        const job = profileData.job
        if(job === "streamer" || job === "doctor" || job === "chef" || job === "entrepreneur" ){
            if(action) return message.reply(`You already have a job as a ${profileData.job}, if you want to quit, do -quit!`)
            if(job === "streamer"){
                
                
                const fifty = ["1", "2", "1"]

                const solution = fifty[Math.floor(Math.random() * fifty.length)]
                
                if(solution == "1"){
                    const unscramble = [
                        {
                            word: "tihwct",
                            correct: "twitch",
                        },
                        {
                            word: "ctithw",
                            correct: "twitch",
                        },
                        {
                            word: "witcth",
                            correct: "twitch",
                        },
                        {
                            word: "whtitc",
                            correct: "twitch",
                        },
                        {
                            word: "cthiwt",
                            correct: "twitch",
                        },
                        {
                            word: "wtcith",
                            correct: "twitch",
                        },
                        {
                            word: "bist",
                            correct: "bits",
                        },
                        {
                            word: "tbsi",
                            correct: "bits",
                        },
                        {
                            word: "sbit",
                            correct: "bits",
                        },
                        {
                            word: "tbis",
                            correct: "bits",
                        },
                        {
                            word: "stib",
                            correct: "bits",
                        },
                        {
                            word: "mperi",
                            correct: "prime",
                        },
                        {
                            word: "imper",
                            correct: "prime",
                        },
                        {
                            word: "irmpe",
                            correct: "prime",
                        },
                        {
                            word: "rpmie",
                            correct: "prime",
                        },
                        {
                            word: "ipemr",
                            correct: "prime",
                        },
                        {
                            word: "aersmt",
                            correct: "stream"
                        },
                        {
                            word: "rmeast",
                            correct: "stream"
                        },
                        {
                            word: "tsream",
                            correct: "stream"
                        },
                        {
                            word: "rtmaes",
                            correct: "stream"
                        },
                        {
                            word: "msetra",
                            correct: "stream"
                        },
                        {
                            word: "ogmpahpc",
                            correct: "pogchamp"
                        },
                        {
                            word: "cpmohpag",
                            correct: "pogchamp"
                        },
                        {
                            word: "aompphgc",
                            correct: "pogchamp"
                        },
                        {
                            word: "ghpmpoca",
                            correct: "pogchamp"
                        },
                        {
                            word: "gappmohc",
                            correct: "pogchamp"
                        },
                        {
                            word: "iealetmvrs",
                            correct: "livestream"
                        },
                        {
                            word: "vterleaims",
                            correct: "livestream"
                        },
                        {
                            word: "irsemavlet",
                            correct: "livestream"
                        },
                        {
                            word: "rselmiaetv",
                            correct: "livestream"
                        },
                        {
                            word: "svtleimare",
                            correct: "livestream"
                        },
                        {
                            word: "vmitaseelr",
                            correct: "livestream"
                        },
                        {
                            word: "vmtasrieel",
                            correct: "livestream"
                        },
                        {
                            word: "emeot",
                            correct: "emote"
                        },
                        {
                            word: "toeem",
                            correct: "emote"
                        },
                        {
                            word: "oteem",
                            correct: "emote"
                        },
                        {
                            word: "etoem",
                            correct: "emote"
                        },
                        {
                            word: "oetme",
                            correct: "emote"
                        },
                        {
                            word: "etome",
                            correct: "emote"
                        },
                    ]
                    
                    let q = unscramble[Math.floor(Math.random() * unscramble.length)]
                    const embed = new Discord.MessageEmbed()
                    .setColor('PURPLE')
                    .setDescription(`Unscramble this word: \`${q.word}\``)
                    .setFooter('You have 15 seconds!')
                    message.channel.send(embed)

                    try{
                        let msgs = await message.channel.awaitMessages(
                            (u2) => u2.author.id === message.author.id,
                            { time: 15000, max: 1, errors: ["time"]}
                        )
                        
                        if(msgs.first().content.toLowerCase().includes(`${q.correct}`)){
                            await profileModel.findOneAndUpdate(
                                {
                                    userID: message.author.id,
                                },
                                {
                                    $inc : {
                                        coins: 10000,
                                    }
                                }
                            )
                            return message.channel.send('Nice going! You got it right! Your reward is 10,000 RSP!')
                        } else{
                            return message.channel.send('Nope! Better luck next time!')
                        }
                    } catch (e){
                        console.log(e)
                        return message.channel.send('oop too slow!')
                    }

                
                }
                
                message.channel.send(new Discord.MessageEmbed().setColor('PURPLE').setDescription(`*Choose a game to stream!*:\n1. Minecraft\n2. Among Us \n3. Fortnite`).setFooter('Reply to this message with the games number!'))
                try{
                    let msgs = await message.channel.awaitMessages(u2=>u2.author.id === message.author.id, { time: 15000, max: 1, errors: ["time"]})
                    if(parseInt(msgs.first().content) == "1"){
                        const choices = [
                            "1",
                            "2",
                            "2",
                            "2",
                            "2",
                            "2",
                            "3",
                            "4",
                            "5",
                            "5",
                            "5",
                            "4",
                            "4",
                            "4",
                            "4",
                        ]
        
                        const choice = choices[Math.floor(Math.random() * choices.length)]
                        if(choice == '2' || choice == '5'){
                            const r = [
                                "Whilst playing minecraft your friend called you and bullied you! That was fun to watch so viewership went up! 10,000 for you!",
                                "As you were mining away, a creeper blew you up and you got clipped and gained a lot of subscribers! You earned 10,000 OFFLINE??",
                                "Stream was boring but some loyal viewers kept donating bits so you got 10,000 RSP",
                                "You got raided by Ph1lza himself and got a LOT of ad revenue! 10,000 Dollars! (pog)"
                            ]

                            const rs = r[Math.floor(Math.random() * r.length)]
                            
                            const embed = new Discord.MessageEmbed()
                            .setDescription(`${rs}`)
                            .setColor('PURPLE')
                            await profileModel.findOneAndUpdate(
                                {
                                    userID: message.author.id,
                                },
                                {
                                    $inc: {
                                        coins: 10000
                                    }
                                }
                            )
                            return message.reply(embed)
                        } else if(choice == '3'){
                            const r = [
                                "Oh lord, you just got 30,000 Dollars after your amazing Minecraft Stream!",
                                "Jeff Bezos himself came in and decided you deserved 30k. Good job. ",
                                "You almost beat the world speedrun record! You should try YouTube! 30K pog.",
                                "Mr. Beast was raiding streams with 1 viewer and you got donated 30K! Wow!"
                            ]

                            const rs = r[Math.floor(Math.random() * r.length)]
                            const embed = new Discord.MessageEmbed()
                            .setDescription(`${rs}`)
                            .setColor('PURPLE')
                            await profileModel.findOneAndUpdate(
                                {
                                    userID: message.author.id,
                                },
                                {
                                    $inc: {
                                        coins: 30000
                                    }
                                }
                            )
                            return message.reply(embed)
                        } else if(choice == '4' || choice == '1'){
                            const r = [
                                "That was literally the most boring stream ever. You only got 10K for that. Sheesh.",
                                "You were frolicking around in the flowers, hoping for viewers. Alas, they never came.",
                                "You made a bad joke and made your viewers mad. SM my robotic head.",
                                "So. Your stream was so bad nobody donated anything. Your 10K revenue is only from the ads. LOL traaassshhhhh."
                            ]

                            const rs = r[Math.floor(Math.random() * r.length)]
                            const embed = new Discord.MessageEmbed()
                            .setDescription(`${rs}`)
                            .setColor('PURPLE')
                            await profileModel.findOneAndUpdate(
                                {
                                    userID: message.author.id,
                                },
                                {
                                    $inc: {
                                        coins: 10000
                                    }
                                }
                            )
                            return message.reply(embed)
                        }
                    } else if(parseInt(msgs.first().content) == "2"){
                        const choices = [
                            "1",
                            "2",
                            "2",
                            "2",
                            "2",
                            "2",
                            "3",
                            "4",
                            "5",
                            "5",
                            "5",
                            "4",
                            "4",
                            "4",
                            "4",
                        ]
        
                        const choice = choices[Math.floor(Math.random() * choices.length)]
                        if(choice == '2' || choice == '5'){
                            const r = [
                                "Dun dun dun dun dun dun dun. dununun. Impostor Sus? Yes, you were the impostor THREE GAMES in a row! People enjoyed it so much they deposited their bank accounts in your pockets!",
                                "You played with PROXIMITY CHAT mod on! People like that for some reason so here is 10K I guess.",
                                "Today you played Among Us with Pokimane, Sykunno, and Corpse. Clearly you gonna get some money. Specifically 10K amounts of money!",
                                "You got views for being the worst impostor there had ever been. Good job!"
                            ]

                            const rs = r[Math.floor(Math.random() * r.length)]
                            const embed = new Discord.MessageEmbed()
                            .setDescription(`${rs}`)
                            .setColor('PURPLE')
                            await profileModel.findOneAndUpdate(
                                {
                                    userID: message.author.id,
                                },
                                {
                                    $inc: {
                                        coins: 10000
                                    }
                                }
                            )
                            return message.reply(embed)
                        } else if(choice == '1' || choice == '4'){
                            const r = [
                                "Among us is a dying game. Only 1K",
                                "LMAO Crewmate the entire time, and you didn't win a single game. This is trash beyond comparison you only got 1K for that!",
                                "You didn't say Red Sus a single time during the entire stream. You KNOW thats the only requirement to stream among us. What are you doing with your life? Obviously only earning 1K RSP. Thats like... 2 IRL dollars! LESS!",
                                "OH MY GOD EPICLY POGGERS STREAM (if you were streaming with 3 viewers). You only got 1K RSP. Really? Do better! (totally not a random thing hehe)"
                            ]

                            const rs = r[Math.floor(Math.random() * r.length)]
                            const embed = new Discord.MessageEmbed()
                            .setDescription(`${rs}`)
                            .setColor('PURPLE')
                            await profileModel.findOneAndUpdate(
                                {
                                    userID: message.author.id,
                                },
                                {
                                    $inc: {
                                        coins: 1000
                                    }
                                }
                            )
                            return message.reply(embed)
                        } 
                    } else if(parseInt(msgs.first().content) == "3"){
                        const choices = [
                            "1",
                            "2",
                            "2",
                            "2",
                            "2",
                            "2",
                            "3",
                            "4",
                            "5",
                            "5",
                            "5",
                            "4",
                            "4",
                            "4",
                            "4",
                        ]
                        
                        const choice = choices[Math.floor(Math.random() * choices.length)]
                        if(choice == '2' || choice == '5'){
                            const r = [
                                "Nice plays! You got 10K for being toxic! Stream chat with 9 year olds of course!",
                                "Today you found the rarest thing ever. Non-toxic Fortnite players? Twitch gave you no money but NASA gave you 10K for your great scientific discovery!",
                                "You just killed everyone and won three trillion games (100% not clickbait), 10K for all da ad revenue and bits!",
                                "Darn, your Streamlabs could barely process the donations sent just to tell you that fortnite sucks. You dont care and continue anyways and end up getting 10K. Jokes on them lol!"
                            ]

                            const rs = r[Math.floor(Math.random() * r.length)]
                            const embed = new Discord.MessageEmbed()
                            .setDescription(`${rs}`)
                            .setColor('PURPLE')
                            await profileModel.findOneAndUpdate(
                                {
                                    userID: message.author.id,
                                },
                                {
                                    $inc: {
                                        coins: 10000
                                    }
                                }
                            )
                            return message.reply(embed)
                        } else if(choice == '1' || choice == '4'){
                            const r = [
                                "Dude why would you even play fortnite? 3K only, LLLLLLL",
                                "You got some nice plays but not much happened. You did get a 69,420 RSP Fortnite Gift Card which you traded in for a measly 3K.",
                                "Da frick you doin playing fortnite? Only 3K, too many toxic nine year olds."
                            ]

                            const rs = r[Math.floor(Math.random() * r.length)]
                            const embed = new Discord.MessageEmbed()
                            .setDescription(`${rs}`)
                            .setColor('PURPLE')
                            await profileModel.findOneAndUpdate(
                                {
                                    userID: message.author.id,
                                },
                                {
                                    $inc: {
                                        coins: 3000
                                    }
                                }
                            )
                            return message.reply(embed)
                        } else if(choice == '3'){
                            const r = [
                                "Dun dun dun dun dun dun dun. dununun. Impostor Sus? Yes, you were the impostor THREE GAMES in a row! People enjoyed it so much they deposited their bank accounts in your pockets!",
                                "You played with PROXIMITY CHAT mod on! People like that for some reason so here is 7K I guess.",
                                "Today you played Among Us with Pokimane, Sykunno, and Corpse. Clearly you gonna get some money. Specifically 7K amounts of money!",
                                "You got views for being the worst impostor there had ever been. Good job!"
                            ]

                            const rs = r[Math.floor(Math.random() * r.length)]
                            const embed = new Discord.MessageEmbed()
                            .setDescription('OH MY GOD EPICLY POGGERS STREAM! YOU GOT 70,000 RSP FROM JUST AN HOUR OF STREAMING!')
                            .setColor('PURPLE')
                            await profileModel.findOneAndUpdate(
                                {
                                    userID: message.author.id,
                                },
                                {
                                    $inc: {
                                        coins: 7000
                                    }
                                }
                            )
                            return message.reply(embed)
                        } 
                    } else{
                        return message.channel.send('Thats not even an option mate...')
                    }
                } catch (e) {
                    return message.channel.send(`You did not reply with a number in time!`)
                }
                
                
                
                
            } else if(job === "doctor"){
                message.channel.send(new Discord.MessageEmbed().setColor('BLUE').setDescription('*Choose which appointment to take:* \n1. Scheduled Physical \n2. Blood Test \n3. Surgery').setFooter('Reply to this message with the procedures number!'))
                
                try{
                    
                    let msgs = await message.channel.awaitMessages(u2=>u2.author.id === message.author.id, { time: 60000, max: 1, errors: ["time"]})
                    
                    if(parseInt(msgs.first().content) == '1'){
                        const trials = [
                            "3", "1", "3", "3", "3", "1", "1", "1", "1", "1", "1", "1", "1", "1", "3", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "3", "1", "1", "1", "1", "2", "2", "2", "3", "3", "3", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "4", "1", "1", "1", "1", "1", "5",
                            "2",
                            "3",
                            "4",
                            "4",
                            "2",
                            "2",
                        ]

                        const trial = trials[Math.floor(Math.random() * trials.length)]
                        if(trial == '1'){
                            const r = [
                                "You went through a normal physical. Classic fee of 10,000 dollars. Dont mind if you do!",
                                "The physical was fine, no diseases, no illnesses, and no viruses, all is well! 10,000 for the physical tho..."
                            ]

                            const rs = r[Math.floor(Math.random() * r.length)]

                            const embed = new Discord.MessageEmbed()
                            .setColor('COLOR')
                            .setDescription(`${rs}`)

                            await profileModel.findOneAndUpdate(
                                {
                                    userID: message.author.id,
                                },
                                {
                                    $inc : {
                                        coins: 10000,
                                    }
                                }
                            )
                            return message.channel.send(embed)
                        } else if(trial == '2'){
                            const r = [
                                "During the physical the patient asks you questions about foot pain. You tell them to get an Xray and procede to charge them 50,000 for the physical, xray, and reading the xray. Just wait till they hear about that!",
                                "While the physical is happening, you reccomend they get a blood test done as you do not like their living habits. You chare 30,000 for the physical and 10,000 for the blood test. Their Vitamin D is a bit low so you prescribe them 5000 IU pills that are impossible to swallow for an additional 10,000 dollars!",
                                "After the physical you read their results and see that you mismarked something. You have them come in again, and this time they take a bit longer. You charge them 50,000 in the end because they ended up needing some disposable masks. Most expensive masks ever, eh?"
                            ]

                            const rs = r[Math.floor(Math.random() * r.length)]

                            const embed = new Discord.MessageEmbed()
                            .setColor('COLOR')
                            .setDescription(`${rs}`)

                            await profileModel.findOneAndUpdate(
                                {
                                    userID: message.author.id,
                                },
                                {
                                    $inc : {
                                        coins: 50000,
                                    }
                                }
                            )
                            return message.channel.send(embed)
                        } else if(trial == '3'){
                            const r = [
                                "Turns out your patient has a benign tumor, but it is getting too big! You must remove the tumor and charge 60,000 dollars for the procedure including the scan for the tumor.",
                                "Its almost as if you won the lottery, except in reality you diagnosed your patient with Diabetes and sold them a couple insulin shots for 60,000 (American healthcare, woo!)",
                                "The patient needed multiple tests including urine tests, blood tests, and others. In the end they ended up having HIVs, so you tell them the bad news, then tell them they have HIVs. The bad news was they are being charged 60K for all the tests and procedures."
                            ]

                            const rs = r[Math.floor(Math.random() * r.length)]

                            const embed = new Discord.MessageEmbed()
                            .setColor('COLOR')
                            .setDescription(`${rs}`) 

                            await profileModel.findOneAndUpdate(
                                {
                                    userID: message.author.id,
                                },
                                {
                                    $inc : {
                                        coins: 60000,
                                    }
                                }
                            )
                            return message.channel.send(embed)
                        } else if(trial == 4){
                            const r = [
                                "You are a horrendous doctor, you misdiagnosed a cancerous tumor for benign. The patient has passed but the family is angry! You were sued for 50,000 dollars!",
                                "While attempting to give the patient a vaccine the patient had an allergic reaction. Although it was not your fault, he sued you for 50,000! "
                            ]

                            const rs = r[Math.floor(Math.random() * r.length)]

                            const embed = new Discord.MessageEmbed()
                            .setColor('COLOR')
                            .setDescription(`${rs}`) 

                            await profileModel.findOneAndUpdate(
                                {
                                    userID: message.author.id,
                                },
                                {
                                    $inc : {
                                        coins: -50000,
                                    }
                                }
                            )
                            return message.channel.send(embed)
                        } else if(trial == 5){
                            const r = [
                                "Although not intentionally, you failed to save a patient. The Patient's family sued the hospital and they have released you of your employment. The CDC and NIH have also revoked your practicing liscence! You were also fined 10,000 RSP!",
                                "You broke the Hippocratic oath and intentionally prescribed someone with a drug they do not need. You lost 10,000 RSP! Also, you have lost your medical liscence and will need to go through med school again if you wish to become a doctor!"
                            ]

                            const rs = r[Math.floor(Math.random() * r.length)]

                            const embed = new Discord.MessageEmbed()
                            .setColor('COLOR')
                            .setDescription(`${rs}`) 

                            await profileModel.findOneAndUpdate(
                                {
                                    userID: message.author.id,
                                },
                                {
                                    job: "unemployed",
                                    doctor: "no",
                                    $inc : {
                                        coins: -10000,
                                    }
                                }
                            )
                            return message.channel.send(embed)
                        }
                    } else if(parseInt(msgs.first().content) == '2'){
                        const trials = [
                            "1",
                            "1",
                            "3",
                            "1",
                            "2",
                            "1",
                            "1",
                        ]

                        const trial = trials[Math.floor(Math.random() * trials.length)]
                        if(trial == '1'){
                            const r = [
                                "The Blood test was fine. I mean, it's a blood test not much can really go wrong. 5,000 dollars for this one.",
                                "The patient came in an ambulance so you charged 5,000 for the ambulance alone.",
                                "Blood test results show that they have Iron Deficiency. You prescribe them some supplements with a grand total of 5,000 RSP"
                            ]

                            const rs = r[Math.floor(Math.random() * r.length)]

                            const embed = new Discord.MessageEmbed()
                            .setColor('COLOR')
                            .setDescription(`${rs}`)

                            await profileModel.findOneAndUpdate(
                                {
                                    userID: message.author.id,
                                },
                                {
                                    $inc : {
                                        coins: 5000,
                                    }
                                }
                            )
                            return message.channel.send(embed)
                        } else if(trial == '2' || trial == '3'){
                            const r = [
                                "Blood Test Done! Everything is all in check! This is the most RISK FREE part of being a Doctor btw! 10,000 Dollars!",
                            ]

                            const rs = r[Math.floor(Math.random() * r.length)]

                            const embed = new Discord.MessageEmbed()
                            .setColor('COLOR')
                            .setDescription(`${rs}`)

                            await profileModel.findOneAndUpdate(
                                {
                                    userID: message.author.id,
                                },
                                {
                                    $inc : {
                                        coins: amt,
                                    }
                                }
                            )
                            return message.channel.send(embed)
                        }
                    } else if(parseInt(msgs.first().content) == '3'){
                        const trial = ["3", "3", "3", "3", "3", "3", "2", "1", "3", "1", "1", "2", "2", "2", "1", "4", "1", "1", "1", "2", "1", "1", "2", "1", "1", "1", "2", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1", "1"]

                        const trials = trial[Math.floor(Math.random() * trial.length)]
                        if(trials == '2' || trials == '4'){ //SUCCESS! Smaller payout
                            const r = [
                                "Your patient had a bullet embedded in their thigh. You were able to successfully get it out. It was not that hard of a procedure so 35,000 RSP for that one!",
                                "Ok get this, he stabbed himself with a pencil. ON PURPOSE. You take out the graphite, patch up his hand, and give him some pain reliever. Now he's all patched up and out of therapy (hey you're a therapist now too!) and charged him 35,000 enough to make him get Economic Anxiety",
                                "SURGERY TIMMEEEE! You are performing on a cop who was caught in broken glass. He had a giant piece of glass sticking out of his arm and you sucessfully removed it. You charged the state 35,000 for that procedure.",
                                "Michael Jackson came back to life and decided he wanted one more plastic surgery. Get your gloves on cuz it aint gonna look real. Anyways, 35,000 for that procedure!",
                                "Channel your inner pulmonologist and treat this patient with a lung tumor. It wasn't huge but you had to take it out anyways. 35,000 RSP For the surgery.",
                                "Your patient spends all day playing Fortnite and he got Carpal Tunnel Syndrome. You have to screw around in his wrist but it all turns out fine. You charge 35,000 RSP for the procedure.",
                                "Time to perform an appendectomy! Two people with Appendicities IN A ROW! Time to get rid of that useless sack of fluid! You take it out and drain their insides, and all is well. 35,000 dollars in check form!",
                                "It ain't really a surgery but you have to treat a patient with a 3rd degree burn. You take care of that then charge them 35K for their stupidity. They thought it would be a good idea to test their oven-cooked chicken wings by touching them while the oven is on. Someone get this mans some help!"
                            ]

                            const rs = r[Math.floor(Math.random() * r.length)]

                            const embed = new Discord.MessageEmbed()
                            .setColor('COLOR')
                            .setDescription(`${rs}`)

                            await profileModel.findOneAndUpdate(
                                {
                                    userID: message.author.id,
                                },
                                {
                                    $inc : {
                                        coins: 35000,
                                    }
                                }
                            )
                            return message.channel.send(embed)
                        } else if(trials == '1' || trials == '3'){ //SUCCESS Largest payout
                                const trivia = [
                                    {
                                        title: "What fluid is held in the gallbladder?",
                                        options: ["Urine", "Aquetis Humor", "Bile", "Water"],
                                        correct: 3
                                    },
                                    {
                                        title: "Vitamin D can be...",
                                        options: ["A steroid", "An Antidepressant", "A Pain Reliever", "IDK why you asking me?"],
                                        correct: 2
                                    },
                                    {
                                        title: "Which old greek dude created the oath Doctors have to follow?",
                                        options: ["Plato", "Aristotle", "Archimedes", "Hippocrates"],
                                        correct: 4
                                    },
                                    {
                                        title: "Which is the largest bone in the body?",
                                        options: ["Femur", "Skull", "Ulna", "Hip Bone"],
                                        correct: 1
                                    },
                                    {
                                        title: "A rapid firing of neurons in the brain is...",
                                        options: ["Epilepsy", "Stroke", "Seizure", "Transient Ischemic Attack"],
                                        correct: 3
                                    },
                                    {
                                        title: "What is another name for the funnybone?",
                                        options: ["Pelvis", "Humerus", "Parietal Bone", "Incus"],
                                        correct: 2
                                    },
                                    {
                                        title: "Which organ controls INSULIN",
                                        options: ["Liver", "Appendix", "Pancreas", "Thorax"],
                                        correct: 3
                                    },
                                    {
                                        title: "What can be used on bacteria?",
                                        options: ["Vaccines", "Antibiotics", "Bile", "Water"],
                                        correct: 2
                                    },
                                    {
                                        title: "What organ does a pulmonologist work on?",
                                        options: ["Heart", "Lungs", "Pulmonary Artery", "Aorta"],
                                        correct: 2
                                    },
                                    {
                                        title: "DNA Stands for...",
                                        options: ["Deoxyribonucleic acid", "Dismyphic Neurotic Alsmasia", "Dialy News and Analysis", "Dextrorotation Naegleric Aberrant"],
                                        correct: 1
                                    },
                                    {
                                        title: "True or false? Polio has been elminated due to vaccines.",
                                        options: ["True", "False"],
                                        correct: 2
                                    },
                                    {
                                        title: "What is low back pain surgery called?",
                                        options: ["Low Back Pain Surgery", "Lumbar Anodyne Procedure", "Lattisimi Myalgia Surgery", "Lower Back Amputation"],
                                        correct: 1
                                    },
                                    {
                                        title: "Where are the Tonsills located",
                                        options: ["Genital Region", "Back of Mouth", "Digestive System", "Nervous System"],
                                        correct: 2
                                    },
                                    {
                                        title: "Which of the following is the correct term for the Lung System?",
                                        options: ["Lung System", "Respiration System", "Breathing System", "Respiratory System"],
                                        correct: 4
                                    },

                                    
                                ]
                                
                                let q = trivia[Math.floor(Math.random() * trivia.length)]
                                let i = 0;
                                const embed = new Discord.MessageEmbed()
                                .setTitle(`${q.title}`)
                                .setDescription(q.options.map(opt=>{
                                    i++;
                                    return `${i}. ${opt}\n`
                                }))
                                .setColor('BLUE')
                                message.channel.send(embed)

                                try{
                                    let msgs = await message.channel.awaitMessages(u2=>u2.author.id === message.author.id, { time: 15000, max: 1, errors: ["time"]})
                                    if(parseInt(msgs.first().content)==q.correct){
                                        await profileModel.findOneAndUpdate(
                                            {
                                                userID: message.author.id,
                                            },
                                            {
                                                $inc : {
                                                    coins: 40000,
                                                }
                                            }
                                        )
                                        return message.channel.send('Looks like your medical knowledge is good! Keep up the good work! You get 40,000 For your continued expertice!')
                                    }
                                    else{
                                        const chance = ["2","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","1","1","1","1","1","3","3","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"]
                                    const result = chance[Math.floor(Math.random() * chance.length)]
                                    if(result== "1"){
                                        return message.channel.send(`You are the worst doctor in history. Aren't you?`)
                                    } else if(result == "2"){
                                        //LOSE 10-30K TO A LAWSUIT

                                        const amt = Math.floor(Math.random() * 40000) + 10000
                                        await profileModel.findOneAndUpdate(
                                            {
                                                userID: message.author.id,
                                            },
                                            {
                                                $inc : {
                                                    coins: -amt,
                                                }
                                            }
                                        )
                                        return message.channel.send(`Youre so bad that you lost ${amt.toLocaleString()} to a lawsuit. BAAADDDD. There is literally a 1/20 chance of that. Bad luck!`)
                                    } else if(result == '3'){
                                        //LOSE LISCENCE LOL
                                        await profileModel.findOneAndUpdate(
                                            {
                                                userID: message.author.id,
                                            }, 
                                            {
                                                job: "unemployed",
                                                doctor: "no"
                                            }
                                        )
                                    }
                                    return message.channel.send('You stupid child. You lost your medical liscence. Good luck getting that back again! There is literally a 1/300 chance of that. Your luck is TRASH!')
                                    }
                                } catch (e) {
                                    return message.channel.send('Its been more than 15 seconds. Timmesss up!')
                                }
                            
                        } else{
                            return message.channel.send('no.')
                        }
                    } else{
                        return message.channel.send('Thats not even an option...')
                    }
                } catch (e) {
                    return message.channel.send("You did not respond in time! You missed your shift. Oh well, no payout for you!")
                }
                
            } else if(job === "entrepreneur"){
                const e = ["1","2","3"]
                const ee = e[Math.floor(Math.random() * e.length)]

                if(ee === '1'){
                    const trivia = [
                        {
                            title: "Which of these companies is known for their electric cars?",
                            options: ["Honda", "Tesla", "Audi", "Porsche"],
                            correct: 2
                        },
                        {
                            title: "Which of these countries is the LEAST entreprenuerial?",
                            options: ["Canada", "United States", "Japan", "Madagascar"],
                            correct: 3
                        },
                        {
                            title: "Which of these were considered a Robber Baron?",
                            options: ["John D. Rockefeller", "Andrew Carnegie", "Thomas Edison", "Henry Ford"],
                            correct: 1
                        },
                        {
                            title: "In which year did women own 36% of all businesses?",
                            options: ["2010", "2011", "2012", "2013"],
                            correct: 3
                        },
                        {
                            title: "What percentage of all startups fail?",
                            options: ["20", "27", "40", "90"],
                            correct: 4
                        },
                        {
                            title: "Which US Country is rated #1 for entrepreneurship>",
                            options: ["Silicon Valley", "New York City", "Chicago", "Los Angeles"],
                            correct: 1
                        },
                        {
                            title: "Which of the following is Wall Street *NOT* [hehe]",
                            options: ["Newspaper", "Stock Market Thing", "Bush Funds", "An Actual Street"],
                            correct: 3
                        },
                        {
                            title: "What can be used on bacteria?",
                            options: ["Vaccines", "Antibiotics", "Bile", "Water"],
                            correct: 3
                        },
                        {
                            title: "What organ does a pulmonologist work on?",
                            options: ["Heart", "Lungs", "Pulmonary Artery", "Aorta"],
                            correct: 2
                        },
                        {
                            title: "DNA Stands for...",
                            options: ["Deoxyribonucleic acid", "Dismyphic Neurotic Alsmasia", "Dialy News and Analysis", "Dextrorotation Naegleric Aberrant"],
                            correct: 1
                        },
                        {
                            title: "True or false? Polio has been elminated due to vaccines.",
                            options: ["True", "False"],
                            correct: 2
                        },
                        {
                            title: "What is low back pain surgery called?",
                            options: ["Low Back Pain Surgery", "Lumbar Anodyne Procedure", "Lattisimi Myalgia Surgery", "Lower Back Amputation"],
                            correct: 1
                        },
                        {
                            title: "Where are the Tonsills located",
                            options: ["Genital Region", "Back of Mouth", "Digestive System", "Nervous System"],
                            correct: 2
                        },
                        {
                            title: "Which of the following is the correct term for the Lung System?",
                            options: ["Lung System", "Respiration System", "Breathing System", "Respiratory System"],
                            correct: 4
                        },

                        
                    ]
                    
                    let q = trivia[Math.floor(Math.random() * trivia.length)]
                    let i = 0;
                    const embed = new Discord.MessageEmbed()
                    .setTitle(`${q.title}`)
                    .setDescription(q.options.map(opt=>{
                        i++;
                        return `${i}. ${opt}\n`
                    }))
                    .setColor('BLUE')
                    message.channel.send(embed)

                    try{
                        let msgs = await message.channel.awaitMessages(u2=>u2.author.id === message.author.id, { time: 15000, max: 1, errors: ["time"]})
                        if(parseInt(msgs.first().content)==q.correct){
                            await profileModel.findOneAndUpdate(
                                {
                                    userID: message.author.id,
                                },
                                {
                                    $inc : {
                                        coins: 40000,
                                    }
                                }
                            )
                            return message.channel.send('Looks like your medical knowledge is good! Keep up the good work! You get 40,000 For your continued expertice!')
                        }
                        else{
                            const chance = ["2","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","2","1","1","1","1","1","3","3","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1","1"]
                        const result = chance[Math.floor(Math.random() * chance.length)]
                        if(result== "1"){
                            return message.channel.send(`You are the worst doctor in history. Aren't you?`)
                        } else if(result == "2"){
                            //LOSE 10-30K TO A LAWSUIT

                            const amt = Math.floor(Math.random() * 40000) + 10000
                            await profileModel.findOneAndUpdate(
                                {
                                    userID: message.author.id,
                                },
                                {
                                    $inc : {
                                        coins: -amt,
                                    }
                                }
                            )
                            return message.channel.send(`Youre so bad that you lost ${amt.toLocaleString()} to a lawsuit. BAAADDDD. There is literally a 1/20 chance of that. Bad luck!`)
                        } else if(result == '3'){
                            //LOSE LISCENCE LOL
                            await profileModel.findOneAndUpdate(
                                {
                                    userID: message.author.id,
                                }, 
                                {
                                    job: "unemployed",
                                    doctor: "no"
                                }
                            )
                        }
                        return message.channel.send('You stupid child. You lost your medical liscence. Good luck getting that back again! There is literally a 1/300 chance of that. Your luck is TRASH!')
                        }
                    } catch (e) {
                        return message.channel.send('Its been more than 15 seconds. Timmesss up!')
                    }
                } else if(ee === '2'){

                } else{

                }
                
                const gain = [
                    "-10000",
                    "10000",
                    "25000",
                    "30000",
                    "25000",
                    "10000",
                    "-1000",
                    "10000",
                    "100",
                ]

                const profit = gain[Math.floor(Math.random() * gain.length)]
                if(profit == "-10000" || profit == "-1000"){
                    const embed = new Discord.MessageEmbed()
                    .setDescription(`Today business was not doing so well! Your profit was: ${profit}. Negative Profit is a loss!`)
                    .setColor('GREEN')
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                coins: profit
                            }
                        }
                    )
                    return message.reply(embed)
                } else{
                    const embed = new Discord.MessageEmbed()
                    .setDescription(`YAY YOU GOT PROFIT OF: ${profit}!`)
                    .setColor('GREEN')
                    await profileModel.findOneAndUpdate(
                        {
                            userID: message.author.id,
                        },
                        {
                            $inc: {
                                coins: profit
                            }
                        }
                    )
                    return message.reply(embed)
                }
            } else if(job === "chef"){
                return message.reply('You are a chef, you have to do -bake to get your cookie boost!')
            }
        } else if(job === "unemployed" || !job){
            message.channel.send('Do -join "job" to join a job!')
            }
        }
        
    }
