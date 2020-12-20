const {deadline} = require('../constListeners')

const addDlName = (bot, msg) => {
    
}

const deleteDlName = (bot, msg) => {

}

const renameDlName = (bot, msg) => {

}

const result = {}
result[deadline.ADDDLNAME] = addDlName
result[deadline.DELETEDLNAME] = deleteDlName
result[deadline.RENAMEDLNAME] = renameDlName

module.exports = result