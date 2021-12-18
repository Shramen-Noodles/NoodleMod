
const settings = require("../models/serversettings");
const serverSettings = require("../models/serversettings");

module.exports = {
    name: "set",
    async execute(client, message, args, cmd, Discord){
      if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You must have `MANAGE MESSAGES` to run this command!')
        const setting = args[0]
        if(!args[0]) return message.channel.send('Run the help command to see what you can set!');
        if(setting.toLowerCase() === "appchannel"){
            const channel = message.mentions.channels.first()
            if(!channel) return message.channel.send('Specify a channel!')
            const channelid = channel.id
            await serverSettings.findOneAndUpdate(
                {
                  serverID: message.guild.id,
                },
                {
                  appChannel: channelid
                }
              );
              return message.channel.send(`You set <#${channelid}> as the notification channel for applications, suggestions, and reports!`); 
        } else if(setting.toLowerCase() === "modlog"){
            const channel = message.mentions.channels.first()
            if(!channel) return message.channel.send('Specify a channel!')
            const channelid = channel.id
            await serverSettings.findOneAndUpdate(
                {
                  serverID: message.guild.id,
                },
                {
                  modLog: channelid
                }
              );
              return message.channel.send(`You set <#${channelid}> as the mod log channel!`); 
        } else if(setting.toLowerCase() === "welcomecolor"){
          const colorid = args[1]
          if(!message.content.includes('#')){
            const mesg = await message.channel.send('Please specify a color ID `eg: #c21000`') 
            mesg.delete({ timeout: 8000 }) 
            return
          }
          await serverSettings.findOneAndUpdate(
            {
              serverID: message.guild.id,
            },
            {
              welcomecolor: colorid
            }
          );
          return message.channel.send(new Discord.MessageEmbed().setColor(`${colorid}`).setDescription('You set the color to the left as your welcome message color!')); 
        } else if(setting.toLowerCase() === "welcomechannel"){
          const channelz = message.mentions.channels.first()
          if(!channelz) return message.channel.send('You must specify a channel!')
          const channelid = channelz.id
          await serverSettings.findOneAndUpdate(
            {
              serverID: message.guild.id,
            },
            {
              welcomechannel: channelid
            }
          );
          return message.channel.send(`You set <#${channelid}> as the welcome channel!`); 
        } else if(setting.toLowerCase() === "blacklistlog"){
          const channel = message.mentions.channels.first()
          if(!channel) return message.channel.send('You must specify a channel!')
          const channelid = channel.id
          await serverSettings.findOneAndUpdate(
            {
              serverID: message.guild.id,
            },
            {
              blacklistlog: channelid
            }
          );
          return message.channel.send(`You set <#${channelid}> as the blacklist log channel!`); 
        } else if(setting.toLowerCase() === "autorole1"){
          const arole = message.mentions.roles.first()
          if(args[1].toLowerCase() === "none"){
            await serverSettings.findOneAndUpdate(
              {
                serverID: message.guild.id,
              },
              {
                autorole1: "1"
              }
            )
            return message.channel.send(`That autorole slot has been cleared!`)
          }
          if(!arole) return message.channel.send('Make sure to specify a role to add as the autorole, eg: `-set autorole(number) @rolename`')
          const roleid = arole.id
          await serverSettings.findOneAndUpdate(
            {
              serverID: message.guild.id,
            },
            {
              autorole1: roleid
            }
          )
          return message.channel.send(`<@&${roleid}> has been set as one of the autoroles`)
        } else if(setting.toLowerCase() === "autorole2"){
          const arole = message.mentions.roles.first()
          if(args[1].toLowerCase() === "none"){
            await serverSettings.findOneAndUpdate(
              {
                serverID: message.guild.id,
              },
              {
                autorole2: "1"
              }
            )
            return message.channel.send(`That autorole slot has been cleared!`)
          }
          if(!arole) return message.channel.send('Make sure to specify a role to add as the autorole, eg: `-set autorole(number) @rolename`')
          
          

          const roleid = arole.id
          await serverSettings.findOneAndUpdate(
            {
              serverID: message.guild.id,
            },
            {
              autorole2: roleid
            }
          )
          return message.channel.send(`<@&${roleid}> has been set as one of the autoroles`)
        } else if(setting.toLowerCase() === "autorole3"){
          const arole = message.mentions.roles.first()
          if(args[1].toLowerCase() === "none"){
            await serverSettings.findOneAndUpdate(
              {
                serverID: message.guild.id,
              },
              {
                autorole3: "1"
              }
            )
            return message.channel.send(`That autorole slot has been cleared!`)
          }
          if(!arole) return message.channel.send('Make sure to specify a role to add as the autorole, eg: `-set autorole(number) @rolename`')
          const roleid = arole.id
          await serverSettings.findOneAndUpdate(
            {
              serverID: message.guild.id,
            },
            {
              autorole3: roleid
            }
          )
          return message.channel.send(`<@&${roleid}> has been set as one of the autoroles`)
        }else if(setting.toLowerCase() === "autorole4"){
          const arole = message.mentions.roles.first()
          if(args[1].toLowerCase() === "none"){
            await serverSettings.findOneAndUpdate(
              {
                serverID: message.guild.id,
              },
              {
                autorole4: "1"
              }
            )
            return message.channel.send(`That autorole slot has been cleared!`)
          }
          if(!arole) return message.channel.send('Make sure to specify a role to add as the autorole, eg: `-set autorole(number) @rolename`')
          const roleid = arole.id
          await serverSettings.findOneAndUpdate(
            {
              serverID: message.guild.id,
            },
            {
              autorole4: roleid
            }
          )
          return message.channel.send(`<@&${roleid}> has been set as one of the autoroles`)
        }else if(setting.toLowerCase() === "autorole5"){
          const arole = message.mentions.roles.first()
          if(args[1].toLowerCase() === "none"){
            await serverSettings.findOneAndUpdate(
              {
                serverID: message.guild.id,
              },
              {
                autorole5: "1"
              }
            )
            return message.channel.send(`That autorole slot has been cleared!`)
          }
          if(!arole) return message.channel.send('Make sure to specify a role to add as the autorole, eg: `-set autorole(number) @rolename`')
          const roleid = arole.id
          await serverSettings.findOneAndUpdate(
            {
              serverID: message.guild.id,
            },
            {
              autorole5: roleid
            }
          )
          return message.channel.send(`<@&${roleid}> has been set as one of the autoroles`)
        }else if(setting.toLowerCase() === "autorole6"){
          const arole = message.mentions.roles.first()
          if(args[1].toLowerCase() === "none"){
            await serverSettings.findOneAndUpdate(
              {
                serverID: message.guild.id,
              },
              {
                autorole6: "1"
              }
            )
            return message.channel.send(`That autorole slot has been cleared!`)
          }
          if(!arole) return message.channel.send('Make sure to specify a role to add as the autorole, eg: `-set autorole(number) @rolename`')
          const roleid = arole.id
          await serverSettings.findOneAndUpdate(
            {
              serverID: message.guild.id,
            },
            {
              autorole6: roleid
            }
          )
          return message.channel.send(`<@&${roleid}> has been set as one of the autoroles`)
        }else if(setting.toLowerCase() === "autorole7"){
          const arole = message.mentions.roles.first()
          if(args[1].toLowerCase() === "none"){
            await serverSettings.findOneAndUpdate(
              {
                serverID: message.guild.id,
              },
              {
                autorole7: "1"
              }
            )
            return message.channel.send(`That autorole slot has been cleared!`)
          }
          if(!arole) return message.channel.send('Make sure to specify a role to add as the autorole, eg: `-set autorole(number) @rolename`')
          const roleid = arole.id
          await serverSettings.findOneAndUpdate(
            {
              serverID: message.guild.id,
            },
            {
              autorole7: roleid
            }
          )
          return message.channel.send(`<@&${roleid}> has been set as one of the autoroles`)
        }else if(setting.toLowerCase() === "autorole8"){
          const arole = message.mentions.roles.first()
          if(args[1].toLowerCase() === "none"){
            await serverSettings.findOneAndUpdate(
              {
                serverID: message.guild.id,
              },
              {
                autorole8: "1"
              }
            )
            return message.channel.send(`That autorole slot has been cleared!`)
          }
          if(!arole) return message.channel.send('Make sure to specify a role to add as the autorole, eg: `-set autorole(number) @rolename`')
          const roleid = arole.id
          await serverSettings.findOneAndUpdate(
            {
              serverID: message.guild.id,
            },
            {
              autorole8: roleid
            }
          )
          return message.channel.send(`<@&${roleid}> has been set as one of the autoroles`)
        }else if(setting.toLowerCase() === "autorole9"){
          const arole = message.mentions.roles.first()
          if(args[1].toLowerCase() === "none"){
            await serverSettings.findOneAndUpdate(
              {
                serverID: message.guild.id,
              },
              {
                autorole9: "1"
              }
            )
            return message.channel.send(`That autorole slot has been cleared!`)
          }
          if(!arole) return message.channel.send('Make sure to specify a role to add as the autorole, eg: `-set autorole(number) @rolename`')
          const roleid = arole.id
          await serverSettings.findOneAndUpdate(
            {
              serverID: message.guild.id,
            },
            {
              autorole9: roleid
            }
          )
          return message.channel.send(`<@&${roleid}> has been set as one of the autoroles`)
        }else if(setting.toLowerCase() === "autorole10"){
          const arole = message.mentions.roles.first()
          if(args[1].toLowerCase() === "none"){
            await serverSettings.findOneAndUpdate(
              {
                serverID: message.guild.id,
              },
              {
                autorole10: "1"
              }
            )
            return message.channel.send(`That autorole slot has been cleared!`)
          }
          if(!arole) return message.channel.send('Make sure to specify a role to add as the autorole, eg: `-set autorole(number) @rolename`')
          const roleid = arole.id
          await serverSettings.findOneAndUpdate(
            {
              serverID: message.guild.id,
            },
            {
              autorole10: roleid
            }
          )
          return message.channel.send(`<@&${roleid}> has been set as one of the autoroles`)
        } else if(setting.toLowerCase() === "muterole"){
          const role = message.mentions.roles.first()
          if(!role) return message.channel.send('Specify a muterole')
          const roleid = role.id
          await serverSettings.findOneAndUpdate(
            {
              serverID: message.guild.id,
            },
            {
              muterole: roleid
            }
          ) 
          return message.channel.send(`<@&${roleid}> has been set as the mute role.`)
        } else if(setting.toLowerCase() === "prefix"){
          const newPrefix = args[1]
          if(!newPrefix) return message.channel.send('Specify a new prefix.')
          await serverSettings.findOneAndUpdate(
            {
              serverID: message.guild.id,
            },
            {
              prefix: newPrefix
            }
          )
          return message.channel.send(`The prefix has been changed to ${newPrefix}`)
        } else if(setting.toLowerCase() === "blacklist"){
          const option = args[1].toLowerCase()
          if(!args[1]) return message.channel.send('Do you want to turn blacklist on or off? -set blacklist on or -set blacklist off?')
          if(option === "on"){
            await serverSettings.findOneAndUpdate(
              {
                serverID: message.guild.id,
              },
              {
                blacklist: "on"
              }
            )
            return message.channel.send('Blacklist is now on. do -blacklist to see the blacklist')
          } else if(option === "off"){
            await serverSettings.findOneAndUpdate(
              {
                serverID: message.guild.id,
              },
              {
                blacklist: "off"
              }
            )
            return message.channel.send('Blacklist is now off. do -blacklist to see the blacklist')
          }
          
          
        } else if(setting.toLowerCase() === "levels"){
          const option = args[1].toLowerCase()
          if(!args[1]) return message.channel.send('-set levels off or set levels on')
          if(option === "off"){
            await serverSettings.findOneAndUpdate(
              {
                serverID: message.guild.id,
              },
              {
                levels: "off"
              }
            )
            return message.channel.send('Levelling has been turned off for this server.')
          } else if(option === "on"){
            await serverSettings.findOneAndUpdate(
              {
                serverID: message.guild.id,
              },
              {
                levels: "on"
              }
            )
            return message.channel.send('Levelling has been turned on for this server.')
          }
        } else if(setting.toLowerCase() === "levelignore1"){
          const channel = message.mentions.channels.first()
          if(args[1].toLowerCase() === "none"){
            await serverSettings.findOneAndUpdate(
              {
                serverID: message.guild.id,
              },
              {
                levelignore1: "none"
              }
            )
            return message.channel.send(`That level ignore channel slot has been cleared`)
          }
          if(!channel) return message.channel.send('Choose a channel to ignore in levelling')
          await serverSettings.findOneAndUpdate(
            {
              serverID: message.guild.id,
            },
            {
              levelignore1: channel.id
            }
          )
          return message.channel.send(`<#${channel.id}> has been set as one of the level ignoring channels. Use -set levelignore(#) none to remove it.`)
        } else if(setting.toLowerCase() === "levelignore2"){
          const channel = message.mentions.channels.first()
          if(args[1].toLowerCase() === "none"){
            await serverSettings.findOneAndUpdate(
              {
                serverID: message.guild.id,
              },
              {
                levelignore2: "none"
              }
            )
            return message.channel.send(`That level ignore channel slot has been cleared`)
          }
          if(!channel) return message.channel.send('Choose a channel to ignore in levelling')
          await serverSettings.findOneAndUpdate(
            {
              serverID: message.guild.id,
            },
            {
              levelignore2: channel.id
            }
          )
          return message.channel.send(`<#${channel.id}> has been set as one of the level ignoring channels. Use -set levelignore(#) none to remove it.`)
        } else if(setting.toLowerCase() === "levelignore3"){
          const channel = message.mentions.channels.first()
          if(args[1].toLowerCase() === "none"){
            await serverSettings.findOneAndUpdate(
              {
                serverID: message.guild.id,
              },
              {
                levelignore3: "none"
              }
            )
            return message.channel.send(`That level ignore channel slot has been cleared`)
          }
          if(!channel) return message.channel.send('Choose a channel to ignore in levelling')
          await serverSettings.findOneAndUpdate(
            {
              serverID: message.guild.id,
            },
            {
              levelignore3: channel.id
            }
          )
          return message.channel.send(`<#${channel.id}> has been set as one of the level ignoring channels. Use -set levelignore(#) none to remove it.`)
        } else if(setting.toLowerCase() === "levelignore4"){
          const channel = message.mentions.channels.first()
          if(args[1].toLowerCase() === "none"){
            await serverSettings.findOneAndUpdate(
              {
                serverID: message.guild.id,
              },
              {
                levelignore4: "none"
              }
            )
            return message.channel.send(`That level ignore channel slot has been cleared`)
          }
          if(!channel) return message.channel.send('Choose a channel to ignore in levelling')
          await serverSettings.findOneAndUpdate(
            {
              serverID: message.guild.id,
            },
            {
              levelignore4: channel.id
            }
          )
          return message.channel.send(`<#${channel.id}> has been set as one of the level ignoring channels. Use -set levelignore(#) none to remove it.`)
        } else if(setting.toLowerCase() === "levelignore5"){
          const channel = message.mentions.channels.first()
          if(args[1].toLowerCase() === "none"){
            await serverSettings.findOneAndUpdate(
              {
                serverID: message.guild.id,
              },
              {
                levelignore5: "none"
              }
            )
            return message.channel.send(`That level ignore channel slot has been cleared`)
          }
          if(!channel) return message.channel.send('Choose a channel to ignore in levelling')
          await serverSettings.findOneAndUpdate(
            {
              serverID: message.guild.id,
            },
            {
              levelignore5: channel.id
            }
          )
          return message.channel.send(`<#${channel.id}> has been set as one of the level ignoring channels. Use -set levelignore(#) none to remove it.`)
        } else if(setting.toLowerCase() === "levelup"){
          const levelchannel = message.mentions.channels.first()
          if(args[1] === "none"){
            await serverSettings.findOneAndUpdate(
              {
                serverID: message.guild.id,
              },
              {
                levelup: "none"
              }
            )
            return message.channel.send(`That slot was cleared`)
          }
          if(!levelchannel) return message.channel.send('Specify a channel to set as the level up channel')
          await serverSettings.findOneAndUpdate(
            {
              serverID: message.guild.id,
            },
            {
              levelup: levelchannel.id
            }
          )
          return message.channel.send(`<#${levelchannel.id}> has been set as the levelup channel!`)
        } else if(setting.toLowerCase() === "levelrole1"){
          const requiredlevel = args[1]
          if(args[1].toLowerCase() === "none"){
            await serverSettings.findOneAndUpdate(
              {
                serverID: message.guild.id,
              },
              {
                levelrole1: "none",
                lrole1level: "none",
              }
            )
            return message.channel.send('That slot has been cleared.')
          }
            
        
          if(!requiredlevel || isNaN(requiredlevel) || requiredlevel < 1) return message.channel.send('Specify a real level on which this role will be given!')
          const reward = message.mentions.roles.first()
          if(!reward) return message.channel.send('Specify a role to be given upon hitting the specified level')
          await serverSettings.findOneAndUpdate(
            {
              serverID: message.guild.id, 
            },
            {
              levelrole1: reward.id,
              lrole1level: requiredlevel
            }
          )
          return message.channel.send(`That level reward slot has been set to ***${reward.name}*** earned on ***Level ${requiredlevel}***`)
        } else if(setting.toLowerCase() === "levelrole2"){
          const requiredlevel = args[1]
          if(args[1].toLowerCase() === "none"){
            await serverSettings.findOneAndUpdate(
              {
                serverID: message.guild.id,
              },
              {
                levelrole2: "none",
                lrole2level: "none",
              }
            )
            return message.channel.send('That slot has been cleared.')
          }
          if(!requiredlevel || isNaN(requiredlevel) || requiredlevel < 1) return message.channel.send('Specify a real level on which this role will be given!')
          const reward = message.mentions.roles.first()
          if(!reward) return message.channel.send('Specify a role to be given upon hitting the specified level')
          await serverSettings.findOneAndUpdate(
            {
              serverID: message.guild.id, 
            },
            {
              levelrole2: reward.id,
              lrole2level: requiredlevel
            }
          )
          return message.channel.send(`That level reward slot has been set to ***${reward.name}*** earned on ***Level ${requiredlevel}***`)
        } else if(setting.toLowerCase() === "levelrole3"){
          const requiredlevel = args[1]
          if(args[1].toLowerCase() === "none"){
            await serverSettings.findOneAndUpdate(
              {
                serverID: message.guild.id,
              },
              {
                levelrole3: "none",
                lrole3level: "none",
              }
            )
            return message.channel.send('That slot has been cleared.')
          }
          if(!requiredlevel || isNaN(requiredlevel) || requiredlevel < 1) return message.channel.send('Specify a real level on which this role will be given!')
          const reward = message.mentions.roles.first()
          if(!reward) return message.channel.send('Specify a role to be given upon hitting the specified level')
          await serverSettings.findOneAndUpdate(
            {
              serverID: message.guild.id, 
            },
            {
              levelrole3: reward.id,
              lrole3level: requiredlevel
            }
          )
          return message.channel.send(`That level reward slot has been set to ***${reward.name}*** earned on ***Level ${requiredlevel}***`)
        } else if(setting.toLowerCase() === "levelrole4"){
          const requiredlevel = args[1]
          if(args[1].toLowerCase() === "none"){
            await serverSettings.findOneAndUpdate(
              {
                serverID: message.guild.id,
              },
              {
                levelrole4: "none",
                lrole4level: "none",
              }
            )
            return message.channel.send('That slot has been cleared.')
          }
          if(!requiredlevel || isNaN(requiredlevel) || requiredlevel < 1) return message.channel.send('Specify a real level on which this role will be given!')
          const reward = message.mentions.roles.first()
          if(!reward) return message.channel.send('Specify a role to be given upon hitting the specified level')
          await serverSettings.findOneAndUpdate(
            {
              serverID: message.guild.id, 
            },
            {
              levelrole4: reward.id,
              lrole4level: requiredlevel
            }
          )
          return message.channel.send(`That level reward slot has been set to ***${reward.name}*** earned on ***Level ${requiredlevel}***`)
        } else if(setting.toLowerCase() === "levelrole5"){
          const requiredlevel = args[1]
          if(args[1].toLowerCase() === "none"){
            await serverSettings.findOneAndUpdate(
              {
                serverID: message.guild.id,
              },
              {
                levelrole5: "none",
                lrole5level: "none",
              }
            )
            return message.channel.send('That slot has been cleared.')
          }
          if(!requiredlevel || isNaN(requiredlevel) || requiredlevel < 1) return message.channel.send('Specify a real level on which this role will be given!')
          const reward = message.mentions.roles.first()
          if(!reward) return message.channel.send('Specify a role to be given upon hitting the specified level')
          await serverSettings.findOneAndUpdate(
            {
              serverID: message.guild.id, 
            },
            {
              levelrole5: reward.id,
              lrole5level: requiredlevel
            }
          )
          return message.channel.send(`That level reward slot has been set to ***${reward.name}*** earned on ***Level ${requiredlevel}***`)
        } else if(setting.toLowerCase() === "f"){
          const arg = args[1].toLowerCase()
          if(!args[1]) return message.channel.send('On or off?')
          if(arg === "on"){
            await serverSettings.findOneAndUpdate(
              {
                serverID: message.guild.id,
              },
              {
                f: "on"
              }
            )
            return message.channel.send('Respond with F upon F has been turned on!')
          }
          else if(arg === "off"){
            await serverSettings.findOneAndUpdate(
              {
                serverID: message.guild.id,
              },
              {
                f: "off"
              }
            )
            return message.channel.send('Respond with F upon F has been turned off!')
          }
        } else if(setting.toLowerCase() === "tts"){
          const channel = message.mentions.channels.first()
          if(args[1].toLowerCase() === 'none'){
            await serverSettings.findOneAndUpdate(
              {
                serverID: message.guild.id,
              },
              {
                tts: "nope"
              }
            )
          return message.channel.send(`TTS is now off for this server.`)
          }
          if(!channel) return message.channel.send('Specify a channel to set as the TTS channel!')
          const channelID = channel.id
          await serverSettings.findOneAndUpdate(
            {
              serverID: message.guild.id,
            },
            {
              tts: channelID
            }
          )
          return message.channel.send(`<#${channelID}> has been set as the **no mic** or **tts** channel!`)
        }
    }
}