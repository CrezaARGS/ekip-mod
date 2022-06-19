module.exports = {
    kod: "kes",
    async run (client, message, args) {
         
if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":x: Yetkiniz yetersiz.")
  
const member = message.guild.member(message.mentions.members.first() || message.guild.members.cache.get(args[0]));
if(!member) return;
if(message.member.roles.highest.position <= member.roles.highest.position) return message.channel.send(new MessageEmbed().setDescription(`${message.author}, Etiketlenen kullanıcı sizden üst/aynı pozisyondadır.`).setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setColor('0x800d0d').setTimestamp()).then(x => x.delete({timeout: 5000}));
message.guild.member(member.id).voice.setChannel(null)

message.react("✅")
 
}
    }
