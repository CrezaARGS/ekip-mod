const { MessageButton } = require("discord-buttons")

module.exports = {
    kod: "sev-button",
    async run (client, message, args) {
        let sevimvar = new MessageButton()
        .setStyle("PRIMARY")
        .setLabel("💖 Sevgilim Var")
        .setID("sevim-var")

        let sevimyok = new MessageButton()
        .setStyle("PRIMARY")
        .setLabel("💔 Sevgilim Yok")
        .setID("sevim-yok")

        let lgbt = new MessageButton()
        .setStyle("PRIMARY")
        .setLabel("✨ LGBT")
        .setID("lgbt")

        message.reply({
            button: [sevimvar, sevimyok, lgbt]
        })
    }
}