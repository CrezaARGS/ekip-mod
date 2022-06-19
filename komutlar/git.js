const Discord = require("discord.js")

module.exports = {
    kod: "git",
    async run (client, message, args) {
        if (!message.member.voice.channel) {
            return message.reply(":x: Ses kanalında olman lazım!");
            }
            const filter = (reaction, user) => {
            return ['✅', '❌'].includes(reaction.emoji.name) && user.id === kullanıcı.id;
            };
              
            let kullanıcı = message.mentions.members.first();
            if (!kullanıcı) return message.reply(':x: Bir Kullanıcı Belirt.');
            
            let rol = message.mentions.roles.first();
            let member = message.guild.member(kullanıcı);
            
            if (!member.voice.channel) return message.reply(':x: Etiketlenen Kullanıcı Ses Kanalında Değil.').then(m => m.delete(5000));
            
              
            let log = new Discord.MessageEmbed()
            .setColor("#7289D")
            .setDescription(`${kullanıcı}, ${message.author} \`${kullanıcı.voice.channel.name}\` Odasına Gelmek İstiyor. Kabul Ediyormusun ?`)
              
            let mesaj = await message.channel.send(log)
            await mesaj.react("✅")
            await mesaj.react("❌")
            mesaj.awaitReactions(filter, {
            max: 1,
            time: 60000,
            errors: ['time']
            }).then(collected => {
            const reaction = collected.first();
            if (reaction.emoji.name === '✅') {
            let kabul = new Discord.MessageEmbed()
            .setColor("0x348f36")
            .setDescription(`${kullanıcı} Odaya Gelmeni Onayladı.`)
            message.channel.send(kabul)
            message.member.voice.setChannel(kullanıcı.voice.channel.id)
            } else {
            let onaylanmadı = new Discord.MessageEmbed()
            .setColor("0x800d0d")
            .setDescription(`${kullanıcı} Odaya Gelmeni Onaylamadı.`)
            message.channel.send(onaylanmadı)
        }
    })
    }
}