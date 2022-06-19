module.exports = {
    kod: "yaz",
    run (client, message, args) {
        let yaz = args.join(" ")

        message.delete()

        message.channel.send(yaz)
    }
}