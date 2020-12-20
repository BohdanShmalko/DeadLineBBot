const {schedule} = require('../constListeners')

const addSchedule = (bot, msg) => {
    
}

const deleteSchedule = (bot, msg) => {

}

const renameSchedule = (bot, msg) => {

}

const result = {}
result[schedule.ADDSCHEDULE] = addSchedule
result[schedule.DELETESCHEDULE] = deleteSchedule
result[schedule.RENAMESCHEDULE] = renameSchedule

module.exports = result