module.exports = {
    kod: "streamer",
    async run (client, message, args) {
        let kişi = message.mentions.members.first()
        
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":x: Bunu yapmak için yönetici olmalısınız.")
        if (!kişi) return message.reply(":x: Bir kullanıcı etiketle!")

        message.reply(`Başarıyla ${kişi} kişisine Streamer Rolü verildi!`)
        kişi.roles.add("961627003478478928")
    }
}