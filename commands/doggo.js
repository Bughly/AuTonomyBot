const Discord = require("discord.js");
const superagent = require("superagent");
const CONFIG = require("../config.json");

module.exports = class doggo {

    constructor(){
        this.name = "doggo",
        this.alias = "d",
        this.usage = ">doggo"
    }

    async run(bot, message, args) {

        let {body} = await superagent
        .get('https://random.dog/woof.json');

        let dogembed = new Discord.RichEmbed()
        .setColor(CONFIG.colour)
        .setTitle("Doggo")
        .setThumbnail(bot.user.displayAvatarURL)
        .setImage(body.url);

        message.channel.send(dogembed);
    }
}
