const {deadline} = require('../constListeners')

const addList = (bot, msg) => {
    
}

const deleteList = (bot, msg) => {

}

const renameList = (bot, msg) => {

}

const result = {}
result[deadline.ADDLIST] = addList
result[deadline.DELETELIST] = deleteList
result[deadline.RENAMELIST] = renameList

module.exports = result