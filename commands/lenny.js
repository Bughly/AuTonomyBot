const Discord = require("discord.js");
const bot = new Discord.Client();
const configFile = require("../config.json");
const COLOUR = configFile.colour;

module.exports = class lenny {

    constructor(){
        this.name = "lenny",
        this.alias = "l",
        this.usage = ">lenny"
    }

    run(bot, message, args) {

        let msgEmbed = new Discord.RichEmbed()
             .setDescription("( ͡° ͜ʖ ͡°)")
             .setColor(COLOUR)

        message.reply(msgEmbed);

    }
}
