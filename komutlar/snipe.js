const { MessageEmbed } = require("discord.js")
const db = require("quick.db")

module.exports = {
    kod: "snipe",
    async run (client, message, args) {

        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":x: Bunu yapmak için yetkiniz yok!")

    const snipe = await db.fetch(`snipe.id.${message.guild.id}`)
    if(!snipe) return await message.react("🚫")
        
      let kullanıcı = client.users.cache.get(snipe);
      const silinen = await db.fetch(`snipe.id.${message.guild.id}`)
      message.react("✅")
      const embed = new MessageEmbed()
      .setAuthor(kullanıcı.username, kullanıcı.avatarURL())
      .setDescription(`Silinen mesaj: ` + silinen)
      .setColor(`0x800d0d`)
      message.channel.send(embed).then(
        r => r.delete({ timeout: 10000}).catch()
      )
        
    }
}