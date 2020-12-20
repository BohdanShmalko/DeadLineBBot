const addday = require('./addday'),
      addpart = require('./addpart'),
      addschedule = require('./addschedule'),
      changepart = require('./changepart'),
      chouseday = require('./chouseday'),
      chouseschedule = require('./chouseschedule'),
      deleteday = require('./deleteday'),
      deletepart = require('./deletepart'),
      deleteschedule = require('./deleteschedule'),
      renameday = require('./renameday'),
      renameschedule = require('./renameschedule')

module.exports = {
    simple : {
        addday, addpart, addschedule, changepart, chouseday, chouseschedule,
        deleteday, deletepart, deleteschedule, renameday, renameschedule
    },
    complex : {}
}