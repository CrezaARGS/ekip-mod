module.exports = {
    kod: "çek",
    async run (client, message, args) {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":x: Bunu yapmak için yetkiniz yok!")

    if (!message.member.voice.channel) return message.reply(":x: **Bir Ses Kanalında Değilsin!**");
      
    let kim = message.mentions.members.first();
    if (!kim) return message.reply(":x: Çekilicek kişiyi belirtiniz.")
     
    if (!kim.voice.channel) return message.reply(":x: tiketlenen Kişi Bir Sesli Kanalda Değil!");
    
      kim.voice.setChannel(message.member.voice.channelID);
      message.channel.send("<@"+kim + "> **İsimli Kişi Yanına Taşındı!**");
    }
}