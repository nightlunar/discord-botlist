const Discord = require('discord.js');
exports.run = async (client, message, args) => {
const embed = new Discord.MessageEmbed()
.setTitle(':pencil:  Yardım Menüsü  :pencil:')
.setDescription(`:book:  __**ANA KOMUTLAR**__  :book:\n \n :pushpin:  __!bot ekle__ = Bot eklersiniz \n \n:pushpin:  __!bot onayla__ = Bot onaylarsınız \n \n:pushpin:  __!bot reddet__ = Bot reddedersiniz \n \n:pushpin:  __!bot bilgi__ = Bot hakkında bilgi alırsınız \n \n :tools:  __**AYARLAMA KOMUTLARI**__  :tools: \n \n:pushpin:  __!botlist ayarlar__ = Botlist ayarlarını görürsünüz \n \n  :pushpin:  __!botlist kanal = Botlist kanal ayarlarsınız__ \n \n :pushpin:  __!botlist devepoler-rol__ = Botlist devepoler rol ayarlarsınız \n \n :pushpin:  __!botlist yetkili-rol__ = Botlist yetkili rol ayarlarısınız \n \n :pushpin:  __!botlist log__ = Botlist log ayarlarsınız \n \n :pushpin:  __!botlist başvuru-log__ = Botlist başvuru log ayarlarsınız \n \n :pushpin:  __!botlist dm-takip__ = Botlist dm takip sistemini ayarlarsınız`)
return message.channel.send(embed)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardım'
};