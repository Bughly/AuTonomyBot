const Discord = require("discord.js");
const bot = new Discord.Client();
const configFile = require("../config.json");
const COLOUR = configFile.colour;

module.exports = class rules { // Change class name for new

    constructor(){
        this.name = "rules", // change these for new
        this.alias = "r",
        this.usage = ">rules"
    }

    run(bot, message, args) {

        let msgEmbed = new Discord.RichEmbed()
             .addField(`AuTonomy Rules`,`1. Don't be a thot.\n2. No Jonah's allowed.\n3. Hope is a banned word.`)
             .setThumbnail(bot.user.displayAvatarURL)
             .setColor(COLOUR);


        message.channel.send(msgEmbed);

    }
}
