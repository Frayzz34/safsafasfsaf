const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');

exports.run = async(client, message, args) => {
  if (message.author.id !== '713678882011742230') return message.channel.send( ":warning:Bu Komutu Sadece `Yapımcım` **Kullanabilir!**")
  const guildArray = client.guilds.sort((a,b)=>a.memberCount-b.memberCount).array().reverse()
  while (guildArray.length) {
    const embed = new Discord.RichEmbed();
    const guilds = guildArray.splice(0,20);
    for (const guild of guilds) {
      embed.setDescription(`${guilds.map(a => '`' +a.id + '` | **Üye Sayısı:** `'  + a.memberCount + '` | **Bölgesi:** `' + a.region + '` | `' + a.name + '`').join('\n')}`);
      embed.setColor('#D97634')
      embed.setAuthor(`Botun Bulunduğu Sunucular; (${client.guilds.size})`, client.user.avatarURL)
    }
    message.channel.send({embed: embed});
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ailemiz', 'sunuculiste'],
  permLevel: 0
};

exports.help = {
  name: 'sunucu-liste',
  description: 'Botun sunucularını detaylı bir şekilde listeler.',
  usage: 'sunucu-liste',
};