const list = require('./list'),
      dlname = require('./dlname'),
      dl = require('./dl')

module.exports = {
    ...list, ...dlname, ...dl
}