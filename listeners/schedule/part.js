const {schedule} = require('../constListeners')

const addPartNumber = (bot, msg) => {
    
}

const addPartName = (bot, msg) => {

}

const deletePart = (bot, msg) => {

}

const changePartOld = (bot, msg) => {

}

const changePartNewNumber = (bot, msg) => {

}

const changePartNewName = (bot, msg) => {

}

const result = {}
result[schedule.NAMEPART] = addPartNumber
result[schedule.NUMBERPART] = addPartName
result[schedule.DELETEPART] = deletePart
result[schedule.OLDNUMBER] = changePartOld
result[schedule.NEWNUMBER] = changePartNewNumber
result[schedule.NEWNAME] = changePartNewName

module.exports = result