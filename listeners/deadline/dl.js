const {deadline} = require('../constListeners')

const addDlTopic = (bot, msg) => {
    
}

const addDlTime = (bot, msg) => {
    
}

const addDlInf = (bot, msg) => {
    
}

const deleteDl = (bot, msg) => {

}

const changeDlTopicOld = (bot, msg) => {

}

const changeDlTopicNew = (bot, msg) => {

}

const changeDlTimeTopic = (bot, msg) => {

}

const changeDlTimeNew = (bot, msg) => {

}

const changeDlInfTopic = (bot, msg) => {

}

const changeDlInfNew = (bot, msg) => {

}

const allDlTopic = (bot, msg) => {

}

const result = {}
result[deadline.ADDDLTOPIC] = addDlTopic
result[deadline.ADDDLTIME] = addDlTime
result[deadline.ADDDLINF] = addDlInf
result[deadline.DELETEDL] = deleteDl
result[deadline.CHANGEDLTOPICOLD] = changeDlTopicOld
result[deadline.CHANGEDLTOPICNEW] = changeDlTopicNew
result[deadline.CHANGEDLTIMETOPIC] = changeDlTimeTopic
result[deadline.CHANGEDLTIMENEW] = changeDlTimeNew
result[deadline.CHANGEDLINFTOPIC] = changeDlInfTopic
result[deadline.CHANGEDLTIMENEW] = changeDlInfNew
result[deadline.ALLTOPICS] = allDlTopic

module.exports = result