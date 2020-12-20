const TelegramBot = require('node-telegram-bot-api')

let chatsStatus = {}
let messageTypes = []
let allCommands = []

class Bot {
    constructor(token, options, db = null){
        this.bot = new TelegramBot(token, options)
        this.db = db
        this.deffoultMessage = null

        this.bot.on("message", msg => {
            if(!chatsStatus[msg.chat.id]) chatsStatus[msg.chat.id] = null
            if(this.deffoultMessage) this.deffoultMessage(msg)
            for(let obj of messageTypes){
                if (chatsStatus[msg.chat.id] === obj.type) {
                    let [command] = msg.text.split(' ')
                    if(allCommands.find(name => name === command)) {
                        this.bot.sendMessage(msg.chat.id, 'Your actions are reset')
                        break
                    }
                    obj.callback(this.bot, msg, this.setStatus)
                    break
                }
            }
        })
    }

    addSimpleCommand(name, callback) {
        allCommands.push(`/${name}`)
        const reg = new RegExp('/' + name);
        this.bot.onText(reg, msg => callback(this.bot, msg, this.setStatus))
    }

    addComplexCommand(name, callback) {
        allCommands.push(`/${name}`)
        const reg = new RegExp('/' + name + ' (.+)');  
        this.bot.onText(reg, (msg, params) => callback(this.bot, msg, params))
    }

    addMessageListener(type, callback) {
        if(!messageTypes.find(obj => obj.type === type))
            messageTypes.push({type, callback}) 
    }

    setStatus(id, status) {
        chatsStatus[id] = status
    }

    setDeffaultMessage = callback => {
        this.deffoultMessage = callback
    }
}

module.exports = Bot