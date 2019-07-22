const Discord = require("discord.js");
const bot = new Discord.Client();
const configFile = require("../config.json");
const COLOUR = configFile.colour;

module.exports = class apply { // Change class name for new

    constructor(){
        this.name = "apply", // change these for new
        this.alias = "a",
        this.usage = ">apply"
    }

    run(bot, message, args) {

        let msgEmbed = new Discord.RichEmbed()
             .setTitle("Apply for AuTonomy")
             .setDescription("The requirements for each position can be found in <#602583915269455912>")
             .addField("Apex Team", "Some info, maybe a link idk.")
             .addField("CS:GO Team", "Some info, maybe a link idk.")
             .addField("Fortnite Team", "Some info, maybe a link idk.")
             .addField("Rainbow Six Team", "Some info, maybe a link idk.")
             .setThumbnail(bot.user.displayAvatarURL)
             .setColor(COLOUR);


        message.reply(msgEmbed);

    }
}
