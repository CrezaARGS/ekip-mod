const { MessageEmbed } = require("discord.js")

module.exports = {
    kod: "bilgi",
    async run (client, message, args) {
        await message.react("✅")

        const embed = new MessageEmbed()
        .setDescription(`
        **Dokunma Rolleri:**

        <@&976978982794829894>
        <@&961626652033548349>
        <@&961626686120681542>
        <@&961626657112866879>
        <@&961626666315177987>
        <@&976974263380762664>
        `)
        message.reply(embed).then(
            r => r.delete({ timeout: 15000}).catch()
        )
    }
}