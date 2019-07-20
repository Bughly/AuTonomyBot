const Discord = require("discord.js");
const bot = new Discord.Client();
const configFile = require("./config.json");
const COLOUR = configFile.colour;

module.exports = class help { // Change class name for new

    constructor(){
        this.name = "help", // change these for new
        this.alias = "h",
        this.usage = ">help"
    }

    run(bot, message, args) {

        let msgEmbed = new Discord.RichEmbed()
             .addField(`AuTonomy Bot Commands`,
                 `Info: \t>info; Displays bot info\n
                 Rules:\t>rules; Displays server rules\n`)
             .setThumbnail(bot.user.displayAvatarURL)
             .setColor(COLOUR);


        message.channel.send(msgEmbed);

    }
}
