const {schedule} = require('../constListeners')

const addDay = (bot, msg) => {
    
}

const deleteDay = (bot, msg) => {

}

const renameDay = (bot, msg) => {

}

const result = {}
result[schedule.ADDDAY] = addDay
result[schedule.DELETEDAY] = deleteDay
result[schedule.RENAMEDAY] = renameDay

module.exports = result