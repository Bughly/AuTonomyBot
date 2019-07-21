const Discord = require("discord.js");
const bot = new Discord.Client();
const tokenfile = require("../tokens.json");
const configFile = require("./config.json");
const { CommandHandler } = require(`djs-commands`);
const CH = new CommandHandler({

    folder: __dirname + "/commands/",
    prefix: [configFile.prefix]

});

bot.on("ready", () => {
  console.log("\nReady!");

  bot.channels.find(channel => channel.name === "status").send(bot.user.username + " Connected!")

  bot.user.setPresence({ status: 'online', game: { name: '>help' } });
});

bot.on("message", (message) => {

    if (message.author.bot) return;

    if (message.content.toLowerCase().includes("how do i apply")) {
        message.reply("Filler text");
    }


    let args = message.content.split(" ");
    let command = args[0];

    let cmd = CH.getCommand(command);

    if (!cmd) return;

    try{
        cmd.run(bot, message, args.slice(1))
    } catch(e){
        console.log(e);
    }

})

bot.on("message", (message) => {

    if (message.author.bot) return;

    if (message.content.toLowerCase().includes("lenny")) {
      message.reply("( ͡° ͜ʖ ͡°)");
    }
})

bot.login(tokenfile.AuTonomyBot);
