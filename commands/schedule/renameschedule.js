module.exports = (settings, msg) => {
    const {bot} = settings
    bot.sendMessage(msg.chat.id, "змінить розклад")
}