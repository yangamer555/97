const Discord = require('discord.js');
const superagent = require('superagent');
const customisation = require('../customisation.json');


exports.run = async (client, message, args, tools) => {
    if (!message.mentions.users.first()) return message.reply("Выберите себе жертву!");
    if (message.mentions.users.first().id === "691911205891080243") return message.channel.send('<a:yayyy:497742636439044096>');
    const { body } = await superagent
    .get("https://nekos.life/api/v2/img/poke");
    
    const embed = new Discord.RichEmbed()
    .setColor(Math.floor(Math.random()*16777215))
    .setTitle(`OwO, ${message.author.username} тыкнул(а) ${message.mentions.users.first().username}`)
    .setImage(body.url) 
        .setFooter(`© 97 РВБ Bot от ${customisation.ownername}`);
    message.channel.send({embed})
};

module.exports.help = {
  name:"poke",
  aliases: ["poke"]
}