module.exports = {
    kod: "unban",
    async run (client, message, args) {
        let kisi = await client.users.fetch(args[0]);

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":x: Bunu yapmak için yönetici olmalısın.")
        if (!kisi) return message.reply(":x: Bir kişi ID'si girin.")

        message.react("✅")
        message.guild.members.unban(kisi.id)
    }
}