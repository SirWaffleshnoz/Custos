var Discord = require('discord.js');

exports.run = (bot, messageDelete) => {
    if (!messageDelete.author.bot) {
        messageDelete.guild.channels.get(bot.config.messageDeleteLog).send(`The message: "${messageDelete.content || "(no content)"}" by **${messageDelete.author.tag}** was deleted.`)
    } else {
        return;
    }
}