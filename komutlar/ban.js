const { MessageEmbed } = require("discord.js")

module.exports = {
    kod: "ban",
    async run (client, message, args) {
       let kişi = message.mentions.members.first()
       let bansebebi = args.slice(1).join(" ") || "**Sebep belirtilmemiş**"

       if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":x: Bunu yapmak için yönetici olmalısınız.")
       if (!kişi) return message.reply(":x: Banlanacak kişiyi belirtmelisiniz.")

       const embed = new MessageEmbed()
       .setDescription(`<@${message.author.id}> Yetkilisi ${kişi} Üyesini sunucudan ${bansebebi} nedeniyle yasakladı!`)
       .setColor("0x800d0d")
       .setTimestamp()
       .setImage("https://media1.tenor.com/images/d856e0e0055af0d726ed9e472a3e9737/tenor.gif?itemid=8540509")
       message.reply(embed).then(message.react("✅"))
       message.guild.member(kişi).ban()
    }
}