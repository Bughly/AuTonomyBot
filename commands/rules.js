const Discord = require("discord.js");
const bot = new Discord.Client();

module.exports = class info {

    constructor(){
        this.name = "rules",
        this.alias = "r",
        this.usage = ">rules"
    }

    run(bot, message, args) {

        let msgEmbed = new Discord.RichEmbed()
             .addField(`AuTonomy Rules`,`1. Don't be a thot.\n2. No Jonah's allowed.\n3. Hope is a banned word.`)
             .setThumbnail(bot.user.displayAvatarURL)
             .setColor("#A5169B");


        message.channel.send(msgEmbed);

    }
}
