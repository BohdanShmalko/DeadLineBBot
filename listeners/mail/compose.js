const addmail = require('./addmail'),
      deletemail = require('./deletemail')

module.exports = {
    ...addmail, ...deletemail
}