const Discord = require("discord.js"); 
const client = new Discord.Client();
require('discord-buttons')(client);
const { MessageButton } = require('discord-buttons')
const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const xra = require("./creza.json");
const { readdirSync } = require('fs'); 
const { join } = require('path');

var prefix = xra.prefix

client.commands= new Discord.Collection(); 


const commandFiles = readdirSync(join(__dirname, "komutlar")).filter(file => file.endsWith(".js")); 

for (const file of commandFiles) {
    const command = require(join(__dirname, "komutlar", `${file}`)); 
    client.commands.set(command.kod, command); 
}

client.on("message" , async msg => {
  
    if(!msg.guild) return;
    if(msg.content.startsWith(creza.prefix+"afk")) return; 
    
    let afk = msg.mentions.users.first()
    
    const kisi = db.fetch(`afkid_${msg.author.id}_${msg.guild.id}`)
    
    const isim = db.fetch(`afkAd_${msg.author.id}_${msg.guild.id}`)
   if(afk){
     const sebep = db.fetch(`afkSebep_${afk.id}_${msg.guild.id}`)
     const kisi3 = db.fetch(`afkid_${afk.id}_${msg.guild.id}`)
     if(msg.content.includes(kisi3)){
  
         msg.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`<@` + msg.author.id + `> Etiketlediğiniz Kişi Afk \nSebep : ${sebep}`))
     }
   }
    if(msg.author.id === kisi){
  
         msg.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`<@${kisi}> Başarıyla Afk Modundan Çıktınız`))
     db.delete(`afkSebep_${msg.author.id}_${msg.guild.id}`)
     db.delete(`afkid_${msg.author.id}_${msg.guild.id}`)
     db.delete(`afkAd_${msg.author.id}_${msg.guild.id}`)
      msg.member.setNickname(isim)
      
    }
    
  });

client.on('ready', () => {
    client.user.setPresence({ activity: { name: "Xra 🧡 Manzelos" }, status: "dnd" });
    console.log(`${client.user.tag}, Başarıyla sunucuya giriş yaptı!`)
    client.channels.cache.get("961627476080087100").join()
})

client.on('clickButton', async button => {
    if (button.id === "sevim-var") {
        await button.clicker.member.roles.add("961627012940836955")
        await button.reply.think(true)
        await button.reply.edit("Başarıyla <@&961627012940836955> Rolü üzerinize verildi!")
    }
})

client.on('clickButton', async button => {
    if (button.id === "sevim-yok") {
        await button.clicker.member.roles.add("977231399478239352")
        await button.reply.think(true)
        await button.reply.edit("Başarıyla <@&977231399478239352> Rolü üzerinize verildi!")
    }
})


client.on('clickButton', async button => {
    if (button.id === "lgbt") {
        await button.clicker.member.roles.add("977231484446441514")
        await button.reply.think(true)
        await button.reply.edit("Başarıyla <@&977231484446441514> Rolü üzerinize verildi!")
    }
})


client.on("message", async message => {

    if(message.author.bot) return;

    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();
        const creza = new MessageEmbed() 
        if(!client.commands.has(command)) return;


        try {
            client.commands.get(command).run(client, message, args);

        } catch {
            console.log("Manzelos Anti Hata !");
        }
    }
})


client.on('message', message => {
    if (message.content.toLocaleLowerCase() === prefix + "tag") {
        const embed = new MessageEmbed()
        .setDescription(`
        Tagımız: \`§\`
        
        Etiket Tagımız: \`1955\`

        İsim Tagımız: \`Manzelos\`
        `).setColor("RANDOM")
        message.reply(embed)
    }
})

client.on('guildMemberAdd', member => {
    client.channels.cache.get("976551626657628180").send(
        `
        Aramıza Hoş Geldin, ${member},

        kayıt yapılması için, <#961627377883054121>, <#961627382706475039>, <#961627387693518958> Kanallarına giriniz.

        Kurallarımızı, <#961627402222583888> Kanalından okuyunuz.

        Bize destek vermek için \`.tag\` Tagımızı alabilirsiniz.

        Seninle <@&961626832040497182> Rolündeki yetkililer ilgilenicektir.
        `
    )
})
    
client.login(xra.token)
