const deadlines = require('./deadline/compose'),
      mail = require('./mail/compose'),
      schedule = require('./schedule/compose')

module.exports = {
    ...deadlines, ...mail, ...schedule
}