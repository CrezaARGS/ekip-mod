const { MessageEmbed } = require("discord.js")

module.exports = {
    kod: "kick",
    async run (client, message, args) {
        let kişi = message.mentions.members.first()
        let sebep = args.slice(1).join(" ") || "**Sebep Yok**"

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":x: Bir kişiyi kicklemek için Yönetici olmalısınız.")
        if (!kişi) return message.reply(":x: Bir kullanıcı belirtiniz.")

        const embed = new MessageEmbed()
        .setDescription(`<@${message.author.id}> Tarafından ${kişi} Üyesi ${sebep} nedeniyle atıldı!`)
        .setColor("0x800d0d").setTimestamp()
        message.reply(embed)
        message.guild.member(kişi).kick();
    }
}