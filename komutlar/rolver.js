const { MessageEmbed } = require("discord.js")

module.exports = {
    kod: "rolver",
    async run (client, message, args) {
        let verilicekkişi = message.mentions.members.first()
        let rol = message.mentions.roles.first()

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":x: Bunu yapmak için yöneticiniz yok!")
        if (!verilicekkişi) return message.reply(":x: Rol verilicek kişiyi belirtiniz.")
        if (!rol) return message.reply(":x: Verilicek rolü belirtiniz.")

            const embed = new MessageEmbed()
            .setDescription(`
            Başarıyla <@${message.author.id}> yetkilisi tarafından, ${verilicekkişi} kişisine, ${rol} verildi!
            `).setColor("0x800d0d").setTimestamp()
            message.reply(embed)
            verilicekkişi.roles.add(rol)
        }
}