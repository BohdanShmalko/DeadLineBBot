const deadlines = require('./deadline/compose'),
      mail = require('./mail/compose'),
      schedule = require('./schedule/compose')

module.exports = {
    simple : {
        ...deadlines.simple,
        ...mail.simple,
        ...schedule.simple
        //"lol" : (bot, msg) => bot.sendMessage(msg.chat.id, "lol")
    },
    complex : {
        ...deadlines.complex,
        ...mail.complex,
        ...schedule.complex
        //"kek" : (bot, msg, [all, parametr]) => bot.sendMessage(msg.chat.id, `Your parametr is ${parametr}`)
    }
}