const config = require('./config'),
      Bot = require('./bot'),
      {Pool} = require('pg'),
      commands = require('./commands/commandsCollect'),
      listeners = require('./listeners/listenersCollection')

const {token} = config

const options = {
    polling : {
        interval : 300, //час між запросами з клієнта на сервер
        autoStart : true, //обробляє накопичені команди коли стартанув
        params : {
            timeout: 10 //таймаут між запросами
        }
    }
}

const db = new Pool({
    host : 'localhost',
    port : 5432,
    database : 'deadliner', 
    user : 'postgres',
    password : '1234'
})

const bot = new Bot(token, options, db)

for(command in commands.simple){
    let callback = commands.simple[command]
    bot.addSimpleCommand(command, callback)
}

for(command in commands.complex){
    let callback = commands.complex[command]
    bot.addComplexCommand(command, callback)
}

for(type in listeners){
    let callback = listeners[type]
    bot.addMessageListener(type, callback)
}

// bot.addMessageListener('LOGIN', (msg) => console.log("here1"))
// bot.addMessageListener('someType', (bot, msg) => bot.sendMessage(msg.chat.id, "lol"))
// bot.setStatus(397967899, 'someType')
// bot.setStatus(397967899, 'test')