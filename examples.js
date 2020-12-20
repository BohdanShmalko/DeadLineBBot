//simple message

bot.on('message', msg => { 
        bot.sendMessage(msg.chat.id, `Hi I now that your message is "${msg.text}"`)
})

//send html

bot.onText(/\/help/, msg => {
    const {id} = msg.chat
    const html = `
    <strong>All commands</strong>
    ${commandsHTML(commands)}
    `
    bot.sendMessage(id, html, {
        parse_mode : 'HTML'
    })
})
const commandsHTML = commands => {
    let tags = ''
    for(key in commands) {
        tags += `<pre>${key} - ${commands[key]}</pre>`
    }
    return tags
}

//send markdown

bot.on('message', msg => { 
    const {id} = msg.chat 
    const markdown = `
    *lol kek*
    _Italic text_
    `
    bot.sendMessage(id, markdown, {
        parse_mode : 'Markdown'
    })
})

//with params in command

bot.onText(/\/addwork (.+)/, (msg, [allCommand, parametr]) => {
    const {id} = msg.chat

    bot.sendMessage(id, `you send command /addWork with parametr ${parametr}`)
})
