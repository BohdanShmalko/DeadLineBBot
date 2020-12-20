const {mail} = require('../constListeners')

const login = (bot, msg, setStatus) => {
    setStatus(msg.chat.id, mail.PASSWORD)
    bot.sendMessage(msg.chat.id, `Your login is ${msg.text}. Enter password`)
}

const password = (bot, msg, setStatus) => {
    setStatus(msg.chat.id, null)
    bot.sendMessage(msg.chat.id, `Your password is ${msg.text}`)
}

const result = {}
result[mail.LOGIN] = login
result[mail.PASSWORD] = password

module.exports = result