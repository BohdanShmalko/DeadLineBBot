const {mail} = require('../../listeners/constListeners')

module.exports = async (bot, msg, setStatus) => {

    setStatus(msg.chat.id, mail.LOGIN)
    bot.sendMessage(msg.chat.id, "введіть мило")
    
}