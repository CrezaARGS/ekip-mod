module.exports = {
    kod: "sil",
    async run (client, message, args) {
if(!message.member.hasPermission("ADMINISTRATOR")) return message.reply(":x: Bu Komutu Kullanmak İçin İzniniz Yok!");
if(!args[0]) return message.channel.send(":x: **Lütfen Silinicek Mesaj Miktarını Yazın.!**");
message.channel.bulkDelete(args[0]).then(() => {
message.channel.send(`${args[0]} Adet Mesajı Sildim. ✅`).then(msg => msg.delete(3000));
})
    }
}